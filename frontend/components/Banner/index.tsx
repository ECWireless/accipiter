import { Fade } from 'react-reveal'
import styled from 'styled-components'
import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

// Components
import { Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, P1 } from 'components/Typography'

interface IBanner {
  heading: string;
  subheading?: string;
}

const Banner: React.FC<IBanner> = ({
  heading,
  subheading,
}) => {
  return (
    <StyledBannerContainer>
      <Spacer size={'lg'} />
      <Flex align={'center'} justify={'space-between'}>
        <Fade ssrFadeout bottom>
          <StyledLine />
        </Fade>
        <Flex align={'center'} direction={'column'}>
          <Fade bottom ssrFadeout>
            <H3 uppercase>{heading}</H3>
          </Fade>
          {subheading && <Fade delay={200} bottom ssrFadeout>
            <Spacer size={'sm'} />
            <P1>{subheading}</P1>
          </Fade>}
        </Flex>
        <Fade ssrFadeout top>
          <StyledLine />
        </Fade>
      </Flex>
      <Spacer size={'lg'} />
    </StyledBannerContainer>
  )
}

export default Banner;

const StyledBannerContainer = styled.div`
  margin: 0 auto;
  width: 400px;
`

const StyledLeftContainer = styled.div`
  grid-column: 1 / 3;
  ${media.xs`
    grid-column: 1 / 2;
  `}
`

const StyledMidContainer = styled.div`
  grid-column: 2 / 3;
  text-align: center;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.xs`
    height: auto;
  `}
`

const StyledRightContainer = styled.div`
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  ${media.xs`
    grid-column: 3 / 4;
  `}
`

const StyledLine = styled.div`
  background: ${colors.green};
  height: ${GU * 15}px;
  width: 2px;
`
