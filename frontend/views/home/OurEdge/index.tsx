import styled from "styled-components";
import { Fade } from "react-reveal";
import { media } from "components/breakpoints";
import { colors, GU } from "components/theme";
import Link from "next/link";

import Banner from "components/Banner";
import { Container } from "components/Containers";
import { H3, H4, P2 } from "components/Typography";
import Spacer from "components/Spacer";

interface IOurTech {
  topLine: boolean;
  techHeading: string;
  techSubheading: string;
  techCard1Title: string;
  techCard1Paragraph: string;
  techCard2Title: string;
  techCard2Paragraph: string;
  techCard3Title: string;
  techCard3Paragraph: string;
  techCard4Title: string;
  techCard4Paragraph: string;
  techCard5Title: string;
  techCard5Paragraph: string;
  techCard6Title: string;
  techCard6Paragraph: string;
}

export const OurTech: React.FC<IOurTech> = ({
  topLine,
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
}) => {
  return (
    <div style={{ borderTop: topLine ? `1px solid ${colors.blue}` : "none" }}>
      <Banner heading={techHeading} subheading={techSubheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <TechCard
            href="/our-edge/photonic-processing"
            heading={techCard1Title}
            subheading={techCard1Paragraph}
          />
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout delay={100}>
          <TechCard
            href="/our-edge/edge-applications"
            heading={techCard2Title}
            subheading={techCard2Paragraph}
          />
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout delay={200}>
          <TechCard
            href="/our-edge/ai-ml-applications"
            heading={techCard3Title}
            subheading={techCard3Paragraph}
          />
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout delay={300}>
          <TechCard
            href="/our-edge/flexibility-software"
            heading={techCard4Title}
            subheading={techCard4Paragraph}
          />
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout delay={400}>
          <TechCard
            href="/our-edge/pcie-and-cxl"
            heading={techCard5Title}
            subheading={techCard5Paragraph}
          />
        </Fade>
        <Spacer size={"md"} />
        <Fade bottom ssrFadeout delay={400}>
          <TechCard
            href="/our-edge/pcie-and-cxl"
            heading={techCard6Title}
            subheading={techCard6Paragraph}
          />
        </Fade>
        <Spacer size={"lg"} />
      </Container>
    </div>
  );
};

interface ITechCard {
  href: string;
  heading: string;
  subheading: string;
}

const TechCard: React.FC<ITechCard> = ({ href, heading, subheading }) => {
  return (
    <Link href={href}>
      <StyledCardContainer>
        <H3 align={"center"} bold={true} color={colors.white}>
          {heading}
        </H3>
        <Spacer size={"xs"} />
        <Spacer size={"xs"} />
        <P2 align={"center"} color={colors.white}>
          {subheading}
        </P2>
      </StyledCardContainer>
    </Link>
  );
};

const StyledCardContainer = styled.div`
  background: ${colors.grey};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
  padding: ${GU * 6}px ${GU * 8}px;
  width: 100%;

  ${media.sm`
    padding: ${GU * 8}px ${GU * 20}px;

    h4 {
      line-height: 1.2;
    }
  `}

  ${media.lg`
    padding: ${GU * 8}px ${GU * 40}px;
    width: ${GU * 220}px;
  `}

  ${media.xl`
    width: ${GU * 250}px;
  `}
`;
