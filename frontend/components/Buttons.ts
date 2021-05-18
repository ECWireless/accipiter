import styled, { css } from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

interface IButton {
  uppercase?: 'true';
  weight?: number;
}

export const Button = styled.button<IButton>`
  background: ${colors.green};
  border: none;
  color: ${colors.black};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.8rem;
  padding: ${GU * 2}px ${GU * 6}px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.blue};
    color: ${colors.white};
    cursor: pointer;
  }

  ${media.xl`
    font-size: 2.2rem;
    padding: ${GU * 2}px ${GU * 10}px;
  `}

  ${props => props.uppercase === 'true' && css`
    text-transform: uppercase;
  `}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
`;