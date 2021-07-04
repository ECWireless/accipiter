import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Button } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import Spinner from 'components/Spinner';
import { H3, P1 } from 'components/Typography';

interface IPortal {
  portalProps: any[];
  user: any;
  loading: any;
}

export const Portal: React.FC<IPortal> = ({
  portalProps,
  user,
  loading,
}) => {
  const [loggingOut, setLoggingOut] = React.useState<boolean>(false);

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
            <H3>Available PDFs:</H3>
            <Spacer size={'md'} />
            <div>
              {portalProps.map((pdf, index) => (
                <PDFsMapping
                  key={index}
                  title={pdf.title}
                  url={pdf}
                />
              ))}
            </div>
            <Spacer size={'lg'} />
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

const PDFsMapping = ({
  title,
  url,
}) => {
  return (
    <Flex>
      {url.pdfFile !== undefined && title !== undefined &&
        <>
          <PDFIcon />
          <a style={{ alignSelf: 'flex-end'}} href={`https://cdn.sanity.io/files/sdx0q0pg/production/${url.pdfFile.asset._ref.substring(5, (url.pdfFile.asset._ref.length - 4))}.pdf?dl=`}>
            <P1 style={{ textDecoration: 'underline', marginLeft: '1rem' }} color={colors.white}>
              {title}
            </P1>
          </a>
        </>
      }
    </Flex>
  )
}

const PDFIcon = styled.div`
  width: ${GU * 6}px;
  height: ${GU * 6}px;
  background-image: url(/Adobe_PDF_icon.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${media.xs`
    width: ${GU * 7}px;
    height: ${GU * 7}px;
  `}
`
