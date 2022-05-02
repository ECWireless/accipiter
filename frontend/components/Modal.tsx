import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { colors } from 'components/theme';
import { media } from 'components/breakpoints'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0px',
    zIndex: 100001,
    padding: '80px 0px',
    width: '90%',

    backgroundColor: colors.black,
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgb(0,0,0,0.9)',
    border: 'none',
    zIndex: 100000,
  },
};

ReactModal.setAppElement("#__next")

export default function Modal({
  open,
  onClose,
  children,
}) {
  const modalStyles = {
    content: { ...customStyles.content },
    overlay: { ...customStyles.overlay },
  };
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      style={modalStyles}
      contentLabel="modal"
    >
      <CloseContainer onClick={onClose}>
        <p>&times;</p>
      </CloseContainer>
      <div style={{ position: 'relative' }}>{children}</div>
    </ReactModal>
  );
}

const CloseContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #FFF;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
	justify-content: center;
	transition: all .5s ease;
  position: absolute;
  top: 12px;
  right: 20px;

  ${media.xs`
    width: 50px;
    height: 50px;
  `}
	
	p {
    position: absolute;
		color: #000;
		font-size: 48px;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -51%);
    padding: 0;
    margin: 0;

    ${media.xs`
		  font-size: 50px;
    `}
	}

	&:hover {
		p {
      color: #FFF;
		}
	}

  &:hover {
  background: ${colors.blue};
    cursor: pointer;
  }

  &:focus {
    background: ${colors.blue};
    cursor: pointer;
  }

  &:active {
    background: ${colors.blue};
    cursor: pointer;
  }
`;
