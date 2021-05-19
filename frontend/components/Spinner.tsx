import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

interface ISpinner {
  color?: string;
}

const Spinner: React.FC<ISpinner> = ({ color }) => {
  return (
    <LDSRing color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LDSRing>
  );
};

export default Spinner;

interface ILDSRing {
  color?: string;
}

const LDSRing = styled.div<ILDSRing>`
  display: inline-block;
  position: relative;
  width: ${GU * 6}px;
  height: ${GU * 6}px;

  ${media.xs`
    width: ${GU * 4}px;
    height: ${GU * 4}px;
  `}

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${GU * 5}px;
    height: ${GU * 5}px;
    margin: ${GU * .5}px;
    border: 2px solid ${colors.white};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.white} transparent transparent transparent;

    ${(props) =>
      props.color &&
      css`
        border: 2px solid ${props.color};
        border-color: ${props.color} transparent transparent transparent;
      `}

      ${media.xs`
        width: ${GU * 4}px;
        height: ${GU * 4}px;
      `}
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
