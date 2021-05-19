import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';


import { Flex } from 'components/Containers';

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.sm`
    width: 50%;
  `}
`;

export const StyledColumnContainer = styled(Flex)`
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`;

export const StyledContactForm = styled.form`
  align-items: center;
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
`;

export const StyledFileInput = styled.input`
  &:hover {
    cursor: pointer;
  }
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
  width: 90%;

  &:hover {
    border-bottom: 2px solid ${colors.green};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${colors.blue};
  }
`;

export const StyledTextArea = styled.textarea`
  background: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-family: 'Nunito Sans', sans-serif;
  max-width: 90%;
  margin-top: ${GU * 4}px;
  min-height: ${GU * 55}px;
  outline: none;
  padding: ${GU * 2}px;
  transition: all 0.3s ease;
  width: 90%;

  &:hover {
    border: 2px solid ${colors.green};
  }

  &:active,
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;
