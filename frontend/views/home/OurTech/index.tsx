import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container } from 'components/Containers';
import { H4, P2 } from 'components/Typography';
import Spacer from 'components/Spacer';

interface IOurTech {
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
    <div style={{ borderTop: `1px solid ${colors.green}`}}>
      <Banner heading={techHeading} subheading={techSubheading} />
      <Container>
        <TechCard
        heading={techCard1Title}
        subheading={techCard1Paragraph}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={techCard2Title}
        subheading={techCard2Paragraph}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={techCard3Title}
        subheading={techCard3Paragraph}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={techCard4Title}
        subheading={techCard4Paragraph}
        />
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
      <H4 align={'center'} bold={true} color={colors.white}>
        {heading}
      </H4>
      <Spacer size={'xs'} />
      <Spacer size={'xs'} />
      <P2 align={'center'} color={colors.white}>
        {subheading}
      </P2>
    </StyledCardContainer>
  )
}

const StyledCardContainer = styled.div`
  background: ${colors.grey};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  margin: 0 auto;
  padding: ${GU * 6}px;
  transition: all .3s ease;
  width: 100%;

  &:hover {
    border: 1px solid ${colors.green};
  }

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
