import styled from 'styled-components'
import { Fade } from 'react-reveal'
import TextLoop from "react-text-loop";

import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import { Container, Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, H4 } from 'components/Typography'

interface IHero {
  heroSubheading: string;
  heroAnimatedText1: string;
  heroAnimatedText2: string;
  heroAnimatedText3: string;
  heroAnimatedText4: string;
}

export const Hero: React.FC<IHero> = ({
  heroSubheading,
  heroAnimatedText1,
  heroAnimatedText2,
  heroAnimatedText3,
  heroAnimatedText4,
}) => {
  return (
    <StyledHeroContainer>
      <StyledHeroVideo autoPlay loop muted playsInline>
        <source src='/videos/hero.mp4' type="video/mp4" />
      </StyledHeroVideo>
      <StyledInnerContainer>
        <StyledTextContainer>
          <Fade ssrFadeout>
            <StyledLogo src="/AccipiterLogo2.png" alt="Coratives Logo"/>
          </Fade>
          <Spacer size={'md'} />
          <Container>
            <H3 align={'center'} bold={true} color={colors.white}>{heroSubheading}</H3>
            <Spacer size={'sm'} />
            <Flex justify={'center'}>
              <TextLoop interval={2000} fade={true}>
                <H3
                  style={{
                    width: `${GU * 75}px`,
                    textAlign: 'center'
                  }}
                  bold={true}
                  color={colors.blue}
                >
                  {heroAnimatedText1}
                </H3>
                <H4
                  style={{
                    width: `${GU * 75}px`,
                    textAlign: 'center'
                  }}
                  bold={true}
                  color={colors.blue}
                >
                  {heroAnimatedText2}
                </H4>
                <H3
                  style={{
                    width: `${GU * 75}px`,
                    textAlign: 'center'
                  }}
                  bold={true}
                  color={colors.blue}
                >
                  {heroAnimatedText3}
                </H3>
                <H3
                  style={{
                    width: `${GU * 75}px`,
                    textAlign: 'center'
                  }}
                  bold={true}
                  color={colors.blue}
                >
                  {heroAnimatedText4}
                </H3>
              </TextLoop>
            </Flex>
          </Container>
        </StyledTextContainer>
      </StyledInnerContainer>
    </StyledHeroContainer>
  )
}

const StyledHeroContainer = styled.div`
  width: 100%;
  height: ${GU * 113}px;
  position: relative;
  overflow: hidden;
  ${media.sm`
    height: ${GU * 125}px;
  `}
  ${media.md`
    height: ${GU * 150}px;
  `}
  ${media.lg`
    height: ${GU * 175}px;
  `}
  ${media.xl`
    height: ${GU * 225}px;
  `}
`

const StyledHeroVideo = styled.video`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  filter: brightness(.5);
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: 1;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  ${media.md`
    width: 100%;
    height: auto;
  `}
`

const StyledInnerContainer = styled(Flex)`
  position: relative;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.img`
  height: ${GU * 30}px;
  width: ${GU * 76}px;

  ${media.xs`
    height: ${GU * 45}px;
    width: ${GU * 100}px;
  `}

  ${media.sm`
    height: ${GU * 55}px;
    width: ${GU * 140}px;
  `}

  ${media.md`
    height: ${GU * 65}px;
    width: ${GU * 170}px;
  `}

  ${media.lg`
    height: ${GU * 73}px;
    width: ${GU * 200}px;
  `}

  ${media.xl`
    height: ${GU * 100}px;
    width: ${GU * 230}px;
  `}
`

const StyledTextContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: ${GU * 30}px;

  ${media.xs`
    margin-top: ${GU * 25}px;
  `}
  ${media.sm`
    margin-top: ${GU * 28}px;
  `}
  ${media.lg`
    margin-top: ${GU * 34}px;
  `}
  ${media.xl`
    margin-top: ${GU * 40}px;
  `}
`
