import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors, GU } from 'components/theme'
import { media } from 'components/breakpoints'

import useAuth from 'hooks/useAuth';

import { Flex } from 'components/Containers'
import { SandwichMenu } from 'components/SandwichMenu'

export default function Navigation({ setSidebar }) {
  const { user } = useAuth();
  const [background, setBackground] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset === 0) {
        setBackground(false)
      } else {
        setBackground(true)
      }
    });
  }, [])
      
  return (
    <StyledHeader background={background}>
      <StyledLogoMobile background={background} src="/AccipiterWhite.png" alt="Coratives Logo"/>
      <StyledMenuContainer>
        <SandwichMenu setSidebar={setSidebar} />
      </StyledMenuContainer>
      <Flex style={{ height: '100%' }} align={'center'}>
        <StyledNav>
          <Link href='/'>
            {router.pathname === '/'
              ? <StyledNavButtonActive>Home</StyledNavButtonActive>
              : <StyledNavButton>Home</StyledNavButton>
            }
          </Link>
          <Link href='/our-tech'>
            {router.pathname === '/our-tech'
              ? <StyledNavButtonActive>Our Tech</StyledNavButtonActive>
              : <StyledNavButton>Our Tech</StyledNavButton>
            }
          </Link>
          <Link href='/careers'>
            {router.pathname === '/careers'
              ? <StyledNavButtonActive>Careers</StyledNavButtonActive>
              : <StyledNavButton>Careers</StyledNavButton>
            }
          </Link>
          <Link href={user ? '/portal' : '/login'}>
            {router.pathname === '/portal' || router.pathname === '/login'
              ? <StyledLoginActive>{user ? 'Portal' : 'Login'}</StyledLoginActive>
              : <StyledLogin>{user ? 'Portal' : 'Login'}</StyledLogin>
            }
          </Link>
        </StyledNav>
        <StyledLogo src="/AccipiterWhite.png" alt="Coratives Logo"/>
      </Flex>
    </StyledHeader>
  )
}

const StyledLogo = styled.img`
  display: none;
  height: ${GU * 10}px;
  left: ${GU * 10}px;
  position: absolute;
  width: ${GU * 24}px;

  ${media.md`
    display: block;
  `}
`;

interface IStyledLogoMobile {
  background: boolean;
}

const StyledLogoMobile = styled.img<IStyledLogoMobile>`
  height: ${GU * 10}px;
  left: -45%;
  opacity: 1;
  position: absolute;
  top: ${GU * 6}px;
  transition: opacity 0.3s ease;
  width: ${GU * 24}px;

  ${props => props.background && css`
    opacity: 0;
  `}

  ${media.sm`
    display: none;
  `}
`;

const StyledMenuContainer = styled.div`
  right: ${GU * 4}px;
  position: fixed;
  top: ${GU * 4}px;
  z-index: 103;

  ${media.xs`
    right: ${GU * 5}px;
    top: ${GU * 5}px;
  `}

  ${media.sm`
    display: none;
  `}
`

interface IStyledHeader {
  background: boolean;
}

const StyledHeader = styled.header<IStyledHeader>`
  box-sizing: border-box;
  height: ${GU * 20}px;
  left: 50%;
  position: fixed;
  top: 0;
  transition: all .3s ease;
  width: 100%;
  z-index: 100;
  
  ${media.sm`
    background: rgba(30, 30, 30, 1);
    transform: translateX(-50%);
  `}

  ${props => props.background && css`
    ${media.sm`
      background: rgba(30, 30, 30, 1);
    `}
  `}
`

const StyledNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: none;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;

  ${media.sm`
    display: flex;
  `}
`

const StyledNavButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: 1.8rem;
  height: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  width: ${GU * 45}px;
  z-index: 102;

  &:hover {
    color: ${colors.blue};
    cursor: pointer;
  }
`

const StyledNavButtonActive = styled.button`
  background: transparent;
  border: none;
  color: ${colors.blue};
  font-size: 1.8rem;
  height: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  width: ${GU * 45}px;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`

const StyledLogin = styled.button`
  background: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 1.8rem;
  height: ${GU * 10}px;
  margin-left: ${GU * 10}px;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  width: ${GU * 30}px;
  z-index: 102;

  &:hover {
    border: 2px solid ${colors.blue};
    color: ${colors.blue};
    cursor: pointer;
  }
`

const StyledLoginActive = styled.button`
  background: ${colors.blue};
  border: 2px solid ${colors.blue};
  color: ${colors.black};
  font-size: 1.8rem;
  height: ${GU * 10}px;
  margin-left: ${GU * 10}px;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  width: ${GU * 30}px;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`