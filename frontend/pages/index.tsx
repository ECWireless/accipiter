import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import client from "client";
import { media } from "components/breakpoints";
import { colors, GU } from "components/theme";

import { Container } from "components/Containers";
import Modal from "components/Modal";
import { H4, P2, P5 } from "components/Typography";
import { urlFor } from "lib/helpers";

import { Hero, OurTech, Products, Partners, Contact } from "views/home";
import { Box } from "@chakra-ui/react";

const Home: React.FC = ({ homeProps }: { [key: string]: any }) => {
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
    techCard5Title,
    techCard5Paragraph,
    techCard6Title,
    techCard6Paragraph,
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
    products5Image,
    products5Name,
    products5Description,
    products6Image,
    products6Name,
    products6Description,
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
        <title>PCIe & Optical System Interconnects | Accipiter Systems</title>
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
              <H4 align={"center"} color={colors.white}>
                {heroSubheading}
              </H4>
            </Fade>
          </Container>
        </StyledBanner>
        <StyledBanner2>
          <Container>
            <Fade bottom ssrFadeout>
              <P2 align={"center"} color={colors.white}>
                We deliver specialized AI application platforms at the data
                source powered by our high-performance system interconnect and
                software solutions where superior architectures and efficiencies
                are required.
              </P2>
            </Fade>
            <Fade bottom ssrFadeout>
              <Box mt={6}>
                <P5 align={"center"} color={colors.white}>
                  As a leading manufacturer of open standards-based electronic
                  and photonic system interconnect products, we streamline AI
                  infrastructure at the data source for demanding edge
                  applications like medical, simulation, emulation, storage,
                  fintech, and border protection. The AI application platforms
                  of system design companies are driven by our hardware
                  components (switches, switch modules, NICs, expansion chassis)
                  and software components (switch software, drivers, APIs,
                  GUIs).
                </P5>
              </Box>
            </Fade>
          </Container>
        </StyledBanner2>
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
          techCard5Title={techCard5Title}
          techCard5Paragraph={techCard5Paragraph}
          techCard6Title={techCard6Title}
          techCard6Paragraph={techCard6Paragraph}
        />
        <div style={{ borderTop: `1px solid ${colors.blue}` }} />
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
          products5Image={urlFor(products5Image)}
          products5Name={products5Name}
          products5Description={products5Description}
          products6Image={urlFor(products6Image)}
          products6Name={products6Name}
          products6Description={products6Description}
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
        <StyledIFrame
          src="https://www.youtube.com/embed/sbjk_4B3kKk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </div>
  );
};

const { DEPLOYMENT_ENVIRONMENT } = process.env;

export const getStaticProps = async () => {
  const homeProps =
    await client.fetch(`*[_type == "home" && slug.current == "${DEPLOYMENT_ENVIRONMENT}"][0] {
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
    techCard5Title,
    techCard5Paragraph,
    techCard6Title,
    techCard6Paragraph,
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
    products5Image,
    products5Name,
    products5Description,
    products6Image,
    products6Name,
    products6Description,
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
	}`);
  return {
    props: { homeProps },
    revalidate: 10,
  };
};

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

const StyledBanner2 = styled.div`
  background: ${colors.greyLight};
  padding: ${GU * 8}px 0;

  p {
    font-weight: 600;
    margin: 0 auto;
    max-width: 900px;
  }
`;
