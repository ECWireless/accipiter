import styled from 'styled-components';
import { Fade } from 'react-reveal';
import BlockContent from '@sanity/block-content-to-react'
import { GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container } from 'components/Containers';
import { H3, P2, P2Block } from 'components/Typography';
import Spacer from 'components/Spacer';

interface IJobSpecification {
  heading: string;
  subheading: string;
  positionTitle: string;
  positionDescription: string;
}

export const JobSpecification: React.FC<IJobSpecification> = ({
  heading,
  subheading,
  positionTitle,
  positionDescription,
}) => {
  return (
    <div>
      <Banner heading={heading} subheading={subheading} />
      <Container>
        <Fade bottom ssrFadeout>
          <H3 bold={true}>{positionTitle}</H3>
        </Fade>
        <Spacer size={'md'} />
        <Fade bottom delay={100} ssrFadeout>
          <P2Block>
            <BlockContent
              blocks={positionDescription}
            />
          </P2Block>
        </Fade>
      </Container>
    </div>
  )
}

const StyledList = styled.ul`
  li {
    list-style: circle;
    margin: ${GU * 5}px;
  }
`;
