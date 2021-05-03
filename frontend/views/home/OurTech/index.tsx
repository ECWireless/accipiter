import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container } from 'components/Containers';
import { H4, P2 } from 'components/Typography';
import Spacer from 'components/Spacer';

export const OurTech: React.FC = () => {
  return (
    <div style={{ borderTop: `1px solid ${colors.green}`}}>
      <Banner heading={'Our Tech'} />
      <Container>
        <TechCard
        heading={'Research'}
        subheading={'Differentiate your research & enable collaboration'}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={'HPC'}
        subheading={'Enable the latest in high performance computing'}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={'Visualization'}
        subheading={'Speed the visualization of your data'}
        />
        <Spacer size={'md'} />
        <TechCard
        heading={'Storage'}
        subheading={'Move petabyte sized files faster with less latency'}
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
