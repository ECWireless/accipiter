import { Fade } from "react-reveal";
import styled from "styled-components";
import { media } from "components/breakpoints";
import { colors, GU } from "components/theme";

import Spacer from "components/Spacer";
import { H3 } from "components/Typography";

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
    <StyledPartnersBackground style={{ borderTop: `1px solid ${colors.blue}` }}>
      <Spacer size={"md"} />
      <Fade bottom ssrFadeout>
        <H3 align={"center"} bold={true} uppercase>
          {partnersHeading}
        </H3>
      </Fade>
      <Spacer size={"md"} />
      <Fade ssrFadeout>
        <StyledLogoContainerLarge topBorder>
          <img alt="Partner logo 1" src={partnersLogo1} />
          <img alt="Partner logo 2" src={partnersLogo2} />
          <img alt="Partner logo 3" src={partnersLogo3} />
          <img alt="Partner logo 4" src={partnersLogo4} />
          <img alt="Partner logo 5" src={partnersLogo5} />
        </StyledLogoContainerLarge>
      </Fade>
      <Fade ssrFadeout delay={200}>
        <StyledLogoContainerLarge>
          <img alt="Partner logo 6" src={partnersLogo6} />
          <img alt="Partner logo 7" src={partnersLogo7} />
          <img alt="Partner logo 8" src={partnersLogo8} />
          <img alt="Partner logo 9" src={partnersLogo9} />
          <img alt="Partner logo 10" src={partnersLogo10} />
        </StyledLogoContainerLarge>
      </Fade>
      <Fade ssrFadeout>
        <StyledLogoContainerSmall topBorder>
          <img alt="Partner logo 1" src={partnersLogo1} />
          <img alt="Partner logo 2" src={partnersLogo2} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={100}>
        <StyledLogoContainerSmall>
          <img alt="Partner logo 3" src={partnersLogo3} />
          <img alt="Partner logo 4" src={partnersLogo4} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={200}>
        <StyledLogoContainerSmall>
          <img alt="Partner logo 5" src={partnersLogo5} />
          <img alt="Partner logo 6" src={partnersLogo6} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={300}>
        <StyledLogoContainerSmall>
          <img alt="Partner logo 7" src={partnersLogo7} />
          <img alt="Partner logo 8" src={partnersLogo8} />
        </StyledLogoContainerSmall>
      </Fade>
      <Fade ssrFadeout delay={400}>
        <StyledLogoContainerSmall>
          <img alt="Partner logo 9" src={partnersLogo9} />
          <img alt="Partner logo 10" src={partnersLogo10} />
        </StyledLogoContainerSmall>
      </Fade>
      <Spacer size={"md"} />
    </StyledPartnersBackground>
  );
};

const StyledPartnersBackground = styled.div`
  background: ${colors.white};
`;

type StyledLogoContainerProps = {
  topBorder?: boolean;
};

const StyledLogoContainerLarge = styled.div<StyledLogoContainerProps>`
  background: ${colors.white};
  display: none;

  ${media.lg`
    display: flex;
  `}

  img {
    object-fit: contain;
    border: 1px solid ${colors.blue};
    border-left: none;
    height: ${GU * 50}px;
    padding: ${GU * 6}px;
    width: 20%;

    ${media.xl`
      height: ${GU * 60}px;
    `}

    ${(props) =>
      !props.topBorder &&
      `
        border-top: none;
      `}
  }

  img:last-child {
    border-right: none;
  }
`;

const StyledLogoContainerSmall = styled.div<StyledLogoContainerProps>`
  background: ${colors.white};
  display: flex;

  ${media.lg`
    display: none;
  `}

  img {
    object-fit: contain;
    border: 1px solid ${colors.blue};
    border-left: none;
    height: ${GU * 40}px;
    padding: ${GU * 6}px;
    width: 50%;

    ${media.xs`
      background-size: 50%;
      height: ${GU * 50}px;
    `}

    ${media.sm`
      background-size: 30%;
    `}

    ${(props) =>
      !props.topBorder &&
      `
        border-top: none;
      `}
  }

  img:last-child {
    border-right: none;
  }
`;
