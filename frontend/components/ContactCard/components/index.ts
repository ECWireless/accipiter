import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

export const StyledContactForm = styled.form`
  align-items: flex-start;
  background: ${colors.grey};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: ${GU * 8}px;
  width: 100%;

  ${media.sm`
    padding: ${GU * 15}px;
  `}

  ${media.lg`
    flex-direction: row;
    padding: ${GU * 15}px 0 ${GU * 20}px;
    width: ${GU * 200}px;
  `}

  ${media.xl`
    width: ${GU * 250}px;
  `}
`;

export const StyledInfoContainer = styled.div`
  width: 100%;

  ${media.lg`
    width: ${GU * 70}px;
  `}

  ${media.xl`
    width: ${GU * 90}px;
  `}
`;

export const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${colors.white};
  color: ${colors.white};
  font-family: 'Nunito Sans', sans-serif;
  height: ${GU * 8}px;
  margin-top: ${GU}px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border-bottom: 2px solid ${colors.green};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${colors.blue};
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${GU * 10}px;
  margin-right: 0;
  width: 100%;

  ${media.xs`
    margin-bottom: ${GU * 15}px;
  `}

  ${media.lg`
    margin-bottom: 0;
    margin-right: ${GU * 20}px;
    width: ${GU * 70}px;
  `}

  ${media.xl`
    width: ${GU * 100}px;
  `}
`;

export const StyledLine = styled.div`
  background: ${colors.green};
  height: 2px;
  width: ${GU * 20}px;
`;

export const StyledSvg = styled.svg`
  fill: ${colors.white};
  height: ${GU * 8}px;
  transition: all .3s ease;
  width: ${GU * 8}px;

  &:hover {
    fill: ${colors.blue};
  }
`;

export const StyledTextArea = styled.textarea`
  background: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-family: 'Nunito Sans', sans-serif;
  max-width: 100%;
  margin-top: ${GU * 4}px;
  min-height: ${GU * 20}px;
  outline: none;
  padding: ${GU * 2}px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border: 2px solid ${colors.green};
  }

  &:active,
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;