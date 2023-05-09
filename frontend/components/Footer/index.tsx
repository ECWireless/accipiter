import styled from "styled-components";
import { media } from "components/breakpoints";
import { colors, GU } from "components/theme";

import { Container } from "components/Containers";
import Spacer from "components/Spacer";
import { P5 } from "components/Typography";

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <StyledBackground />
      <Spacer size={"md"} />
      <Container>
        <StyledInnerContainer>
          <StyledLogo src="/AccipiterWhite.png" alt="Coratives Logo" />
          <Spacer size={"md"} />
          <a
            rel={"noreferrer noopener"}
            target={"_blank"}
            href={"https://www.linkedin.com/company/accipiter-systems/"}
          >
            <StyledSvg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title>linkedin</title>
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
            </StyledSvg>
          </a>
          <Spacer size={"md"} />
          <StyledTextContainer>
            <P5 color={colors.white}>(724) 933-8895</P5>
            <StyledLine />
            <P5 color={colors.white}>12330 PERRY HWY, SUITE #106</P5>
            <P5 color={colors.white}>WEXFORD, PA 15090</P5>
          </StyledTextContainer>
        </StyledInnerContainer>
      </Container>
      <Spacer size={"md"} />
    </StyledFooterContainer>
  );
};

export default Footer;

const StyledBackground = styled.div`
  background: ${colors.greyDark};
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const StyledFooterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLine = styled.div`
  background: ${colors.blue};
  height: 2px;
  margin: ${GU * 4}px 0;
  width: ${GU * 20}px;
`;

const StyledInnerContainer = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;

  ${media.sm`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const StyledLogo = styled.img`
  height: ${GU * 20}px;
  width: ${GU * 46}px;
  position: relative;
  z-index: -1;
`;

const StyledSvg = styled.svg`
  fill: ${colors.white};
  height: ${GU * 8}px;
  transition: all 0.3s ease;
  width: ${GU * 8}px;

  ${media.sm`
    position: absolute;
    transform: translate(-50%, -50%);
  `}

  &:hover {
    fill: ${colors.blue};
  }
`;

const StyledTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${media.sm`
    align-items: flex-end;
  `}
`;
