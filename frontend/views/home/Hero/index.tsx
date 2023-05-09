import React from "react";
import styled from "styled-components";

import { media } from "components/breakpoints";
import { colors, GU, shadows } from "components/theme";

interface IHero {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heroSubheading: string;
  heroAnimatedText1: string;
  heroAnimatedText2: string;
  heroAnimatedText3: string;
  heroAnimatedText4: string;
}

const words = ["words1", "words2", "words3"];

export const Hero: React.FC<IHero> = ({
  setModalOpen,
  // heroSubheading,
  // heroAnimatedText1,
  // heroAnimatedText2,
  // heroAnimatedText3,
  // heroAnimatedText4,
}) => {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHeroContainer>
      <StyledHeroVideo autoPlay loop muted playsInline>
        <source
          src="https://arweave.net/tAO_BpHTcGu8QoSXfa67edQKmhfIKXeAeheC6D3ZfGI"
          type="video/mp4"
        />
      </StyledHeroVideo>
      <StyledButton onClick={() => setModalOpen(true)}>
        <svg
          version="1.1"
          fill={"#121212"}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>play2</title>
          <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>
        </svg>
      </StyledButton>
    </StyledHeroContainer>
  );
};

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
`;

const StyledHeroVideo = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: 1;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  width: auto;
  z-index: -1;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledButton = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 50%;
  box-shadow: ${shadows.button};
  display: flex;
  height: ${GU * 16}px;
  justify-content: center;
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  width: ${GU * 16}px;
  z-index: 1;

  &:hover {
    box-shadow: ${shadows.buttonHover};
    cursor: pointer;
  }
`;
