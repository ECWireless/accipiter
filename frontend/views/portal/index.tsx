import React from 'react';
import { Fade } from 'react-reveal';
import { useRouter } from 'next/router';
import { colors } from 'components/theme';

import Banner from 'components/Banner';
import { Button } from 'components/Buttons';
import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import Spinner from 'components/Spinner';
import { H3, P1 } from 'components/Typography';

interface IPortal {
  user: any;
  loading: any;
}

export const Portal: React.FC<IPortal> = ({
  user,
  loading,
}) => {
  const [loggingOut, setLoggingOut] = React.useState<boolean>(false);

  const router = useRouter()

  const onLogout = async () => {
    if (!user) return;
    setLoggingOut(true)
    
    const authRequest = await fetch('/api/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${user.publicAddress}` }
    })
  
    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      window.location.href = '/';
    } else {
      setLoggingOut(false);
    }
  }

  return (
    <div>
      <Banner heading={'Client Portal'} />
      <Container>
        <Fade bottom ssrFadeout>
          <div>
            <H3>PDFs will be available soon.</H3>
            <Spacer size={'md'} />
            <P1>Username: {loading ? "Loading..." : user.email}</P1>
            <Spacer size={'sm'} />
            <div>
              <Button
                uppercase={'true'}
                weight={700}
                type={'button'}
                disabled={loggingOut}
                onClick={onLogout}
              >
                {!loggingOut
                  ? 'Logout'
                  : <Spinner color={colors.grey} />
                }
              </Button>
            </div>
          </div>
        </Fade>
        <Spacer size={'lg'} />
      </Container>
    </div>
  )
}
