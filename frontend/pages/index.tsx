import Head from 'next/head'
import { GetServerSideProps } from 'next'
import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import imageUrlBuilder from '@sanity/image-url'
import client from 'client';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { Container } from 'components/Containers';
import Modal from 'components/Modal';
import { H4 } from 'components/Typography';

import {
  Hero,
  OurTech,
  Products,
  Partners,
  Contact
} from 'views/home';

const Home: React.FC = ({ homeProps }: { [key: string]: any} ) => {
  const {
		heroSubheading,
    heroAnimatedText1,
    heroAnimatedText2,
    heroAnimatedText3,
    heroAnimatedText4,
    techHeading,
    techSubheading,
    techCard1Title,
    techCard1Paragraph,
    techCard2Title,
    techCard2Paragraph,
    techCard3Title,
    techCard3Paragraph,
    techCard4Title,
    techCard4Paragraph,
    productsHeading,
    productsSubheading,
    products1Image,
    products1Name,
    products1Description,
    products2Image,
    products2Name,
    products2Description,
    products3Image,
    products3Name,
    products3Description,
    products4Image,
    products4Name,
    products4Description,
    partnersHeading,
    partnersLogo1,
    partnersLogo2,
    partnersLogo3,
    partnersLogo4,
    partnersLogo5,
    partnersLogo6,
    partnersLogo7,
    partnersLogo8,
    partnersLogo9,
    partnersLogo10,
    contactHeading,
    contactSubheading,
   } = homeProps;

   const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <Head>
        <title>PCIe Switches and High Performance Networking | Accipiter Systems</title>
      </Head>

      <main>
        <Hero
          setModalOpen={setModalOpen}
          heroSubheading={heroSubheading}
          heroAnimatedText1={heroAnimatedText1}
          heroAnimatedText2={heroAnimatedText2}
          heroAnimatedText3={heroAnimatedText3}
          heroAnimatedText4={heroAnimatedText4}
        />
        <StyledBanner>
          <Container>
            <Fade bottom ssrFadeout>
              <H4 align={'center'} color={colors.white}>{heroSubheading}</H4>
            </Fade>
          </Container>
        </StyledBanner>
        <OurTech
          topLine={false}
          techHeading={techHeading}
          techSubheading={techSubheading}
          techCard1Title={techCard1Title}
          techCard1Paragraph={techCard1Paragraph}
          techCard2Title={techCard2Title}
          techCard2Paragraph={techCard2Paragraph}
          techCard3Title={techCard3Title}
          techCard3Paragraph={techCard3Paragraph}
          techCard4Title={techCard4Title}
          techCard4Paragraph={techCard4Paragraph}
        />
        <Products
          productsHeading={productsHeading}
          productsSubheading={productsSubheading}
          products1Image={urlFor(products1Image)}
          products1Name={products1Name}
          products1Description={products1Description}
          products2Image={urlFor(products2Image)}
          products2Name={products2Name}
          products2Description={products2Description}
          products3Image={urlFor(products3Image)}
          products3Name={products3Name}
          products3Description={products3Description}
          products4Image={urlFor(products4Image)}
          products4Name={products4Name}
          products4Description={products4Description}
        />
        <Partners
          partnersHeading={partnersHeading}
          partnersLogo1={urlFor(partnersLogo1)}
          partnersLogo2={urlFor(partnersLogo2)}
          partnersLogo3={urlFor(partnersLogo3)}
          partnersLogo4={urlFor(partnersLogo4)}
          partnersLogo5={urlFor(partnersLogo5)}
          partnersLogo6={urlFor(partnersLogo6)}
          partnersLogo7={urlFor(partnersLogo7)}
          partnersLogo8={urlFor(partnersLogo8)}
          partnersLogo9={urlFor(partnersLogo9)}
          partnersLogo10={urlFor(partnersLogo10)}
        />
        <Contact
          contactHeading={contactHeading}
          contactSubheading={contactSubheading}
        />
      </main>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <StyledIFrame src="https://www.youtube.com/embed/sbjk_4B3kKk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Modal>
    </div>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
		heroSubheading,
    heroAnimatedText1,
    heroAnimatedText2,
    heroAnimatedText3,
    heroAnimatedText4,
    techHeading,
    techSubheading,
    techCard1Title,
    techCard1Paragraph,
    techCard2Title,
    techCard2Paragraph,
    techCard3Title,
    techCard3Paragraph,
    techCard4Title,
    techCard4Paragraph,
    productsHeading,
    productsSubheading,
    products1Image,
    products1Name,
    products1Description,
    products2Image,
    products2Name,
    products2Description,
    products3Image,
    products3Name,
    products3Description,
    products4Image,
    products4Name,
    products4Description,
    partnersHeading,
    partnersLogo1,
    partnersLogo2,
    partnersLogo3,
    partnersLogo4,
    partnersLogo5,
    partnersLogo6,
    partnersLogo7,
    partnersLogo8,
    partnersLogo9,
    partnersLogo10,
    contactHeading,
    contactSubheading,
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home;

const StyledIFrame = styled.iframe`
  width: 256px;
  height: 144px;

  ${media.xs`
    width: 320px;
    height: 180px;
  `}

  ${media.sm`
    width: 640px;
    height: 360px;
  `}

  ${media.md`
    width: 640px;
    height: 360px;
  `}

  ${media.lg`
    width: 960px;
    height: 540px;
  `}

  ${media.xl`
    width: 1280px;
    height: 720px;
  `}
`;

const StyledBanner = styled.div`
  background: ${colors.grey};
  padding: ${GU * 14}px 0;

  h4 {
    font-weight: 700;
  }
`;
