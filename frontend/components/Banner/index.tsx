import { Fade } from 'react-reveal'
import styled from 'styled-components'
import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

// Components
import { Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, P1 } from 'components/Typography'

interface IBanner {
  color?: string;
  heading: string;
  subheading?: string;
}

const Banner: React.FC<IBanner> = ({
  color,
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
            <H3 color={color ? color : '#fff'} bold={true} uppercase>{heading}</H3>
          </Fade>
          {subheading && <Fade delay={200} bottom ssrFadeout>
            <Spacer size={'sm'} />
            <P1 color={color ? color : '#fff'}>{subheading}</P1>
          </Fade>}
        </Flex>
        <Fade ssrFadeout top>
          <StyledLine />
        </Fade>
      </Flex>
      <Spacer size={'md'} />
      <Spacer size={'md'} />
    </StyledBannerContainer>
  )
}

export default Banner;

const StyledBannerContainer = styled.div`
  margin: 0 auto;
  width: ${GU * 65}px;

  ${media.xs`
    width: ${GU * 80}px;
  `}

  ${media.sm`
    width: ${GU * 100}px;
  `}

  ${media.xl`
    width: ${GU * 140}px;
  `}
`

const StyledLine = styled.div`
  background: ${colors.green};
  height: ${GU * 15}px;
  width: 2px;
`
