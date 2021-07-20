import { Fade } from 'react-reveal'
import styled from 'styled-components';
import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

interface IPartners {
  partnersHeading: string;
  partnersLogo1: any;
  partnersLogo2: any;
  partnersLogo3: any;
  partnersLogo4: any;
  partnersLogo5: any;
  partnersLogo6: any;
  partnersLogo7: any;
  partnersLogo8: any;
  partnersLogo9: any;
  partnersLogo10: any;
}

export const Partners: React.FC<IPartners> = ({
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

}) => {
  return (
    <StyledPartnersBackground style={{ borderTop: `1px solid ${colors.blue}`}}>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H3 align={'center'} bold={true} uppercase>
          {partnersHeading}
        </H3>
      </Fade>
      <Spacer size={'md'} />
      <Fade ssrFadeout>
        <StyledLogoContainerLarge>
          <div style={{ backgroundImage: `url(${partnersLogo1})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo2})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo3})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo4})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo5})`}} />
        </StyledLogoContainerLarge>
      </Fade>
      <Fade ssrFadeout delay={200}>
        <StyledLogoContainerLarge>
          <div style={{ backgroundImage: `url(${partnersLogo6})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo7})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo8})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo9})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo10})`}} />
        </StyledLogoContainerLarge>
      </Fade>
      <Fade ssrFadeout>
        <StyledLogoContainerSmall>
          <div style={{ backgroundImage: `url(${partnersLogo1})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo2})`}} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={100}>
        <StyledLogoContainerSmall>
          <div style={{ backgroundImage: `url(${partnersLogo3})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo4})`}} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={200}>
        <StyledLogoContainerSmall>
          <div style={{ backgroundImage: `url(${partnersLogo5})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo6})`}} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={300}>
        <StyledLogoContainerSmall>
          <div style={{ backgroundImage: `url(${partnersLogo7})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo8})`}} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={400}>
        <StyledLogoContainerSmall>
          <div style={{ backgroundImage: `url(${partnersLogo9})`}} />
          <div style={{ backgroundImage: `url(${partnersLogo10})`}} />
        </StyledLogoContainerSmall>
      </Fade>
      <Spacer size={'md'} />
    </StyledPartnersBackground>
  )
}

const StyledPartnersBackground = styled.div`
  background: ${colors.white};
`

const StyledLogoContainerLarge = styled.div`
  background: ${colors.white};
  display: none;

  ${media.lg`
    display: flex;
  `}
  
  div {
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    border: 1px solid ${colors.blue};
    border-left: none;
    height: ${GU * 50}px;
    width: 20%;

    ${media.xl`
      height: ${GU * 60}px;
    `}
  }

  div:last-child {
    border-right: none;
  }
`

const StyledLogoContainerSmall = styled.div`
  background: ${colors.white};
  display: flex;

  ${media.lg`
    display: none;
  `}
  
  div {
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 1px solid ${colors.blue};
    border-left: none;
    height: ${GU * 40}px;
    width: 50%;

    ${media.xs`
      background-size: 50%;
      height: ${GU * 50}px;
    `}

    ${media.sm`
      background-size: 30%;
    `}
  }

  div:last-child {
    border-right: none;
  }
`