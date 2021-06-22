import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container } from 'components/Containers';
import { H4, P2 } from 'components/Typography';
import Spacer from 'components/Spacer';

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
}) => {
  return (
    <div style={{ borderTop: topLine ? `1px solid ${colors.green}` : 'none', background: '#fff'}}>
      <Banner color={'#121212'} heading={techHeading} subheading={techSubheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <TechCard
          heading={techCard1Title}
          subheading={techCard1Paragraph}
          />
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout delay={100}>
          <TechCard
            heading={techCard2Title}
            subheading={techCard2Paragraph}
          />
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout delay={200}>
          <TechCard
            heading={techCard3Title}
            subheading={techCard3Paragraph}
          />
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout delay={300}>
          <TechCard
            heading={techCard4Title}
            subheading={techCard4Paragraph}
            />
        </Fade>
        <Spacer size={'lg'} />
      </Container>
    </div>
  )
}

interface ITechCard {
  heading: string;
  subheading: string;
}

const TechCard: React.FC<ITechCard> = ({
  heading,
  subheading,
}) => {
  return (
    <StyledCardContainer>
      <H4 align={'center'} bold={true} color={colors.black}>
        {heading}
      </H4>
      <Spacer size={'xs'} />
      <Spacer size={'xs'} />
      <P2 align={'center'} color={colors.black}>
        {subheading}
      </P2>
    </StyledCardContainer>
  )
}

const StyledCardContainer = styled.div`
  background: #F1F3F4;
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  margin: 0 auto;
  padding: ${GU * 6}px;
  width: 100%;

  ${media.sm`
    padding: ${GU * 8}px;
  `}

  ${media.lg`
    width: ${GU * 200}px;
  `}

  ${media.xl`
    width: ${GU * 250}px;
  `}
`
