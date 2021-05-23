import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk'
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Button } from 'components/Buttons';
import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import Spinner from 'components/Spinner';

export const Login: React.FC = () => {
  const router = useRouter();
  const [loggingIn, setLoggingIn] = React.useState<boolean>(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoggingIn(true);

    const { elements } = event.target

    const did = await new Magic(process.env.MAGIC_PUBLISHABLE_KEY)
      .auth
      .loginWithMagicLink({ email: elements.email.value })

    // Once we have the token from magic,
    // update our own database

    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })
  
    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/portal')
    } else {
      setLoggingIn(false);
    }
  }

  return (
    <div>
      <Banner heading={'Login'} subheading={'Client Portal'} />
      <Container>
        <Fade bottom ssrFadeout>
          <StyledLoginForm onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <StyledInput name="email" type="email" />
            <Spacer size={'sm'} />
            <div>
              <Button
                uppercase={'true'}
                weight={700}
                type={'submit'}
                disabled={loggingIn}
              >
                {!loggingIn
                  ? 'Login or Signup'
                  : <Spinner color={colors.grey} />
                }
              </Button>
            </div>
          </StyledLoginForm>
        </Fade>
        <Spacer size={'lg'} />
      </Container>
    </div>
  )
}

export const StyledLoginForm = styled.form`
  align-items: flex-start;
  background: ${colors.grey};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: ${GU * 8}px ${GU * 10}px;
  width: 100%;

  ${media.sm`
    padding: ${GU * 15}px ${GU * 30}px;
  `}

  ${media.lg`
    padding: ${GU * 15}px ${GU * 50}px;
    width: ${GU * 200}px;
  `}

  ${media.xl`
    width: ${GU * 250}px;
  `}
`;

export const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${colors.white};
  color: ${colors.white};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 2rem;
  height: ${GU * 8}px;
  margin-top: ${GU * 4}px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border-bottom: 2px solid ${colors.green};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${colors.blue};
  }
`;
