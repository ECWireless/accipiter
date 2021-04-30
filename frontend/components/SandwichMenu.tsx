import styled, { css } from 'styled-components'
import { colors, GU } from 'components/theme'
import { media } from 'components/breakpoints'
import { Flex } from 'components/Containers'
import Spacer from 'components/Spacer'

export const SandwichMenu = ({ setSidebar }): JSX.Element => {
  return (
    <ButtonContainer onClick={() => setSidebar(true)}>
      <Flex direction={'column'} justify={'space-between'}>
        <Spacer size={'xs'} />
        <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
        <Spacer size={'xxs'} />
        <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
        <Spacer size={'xxs'} />
        <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
        <Spacer size={'xs'} />
      </Flex>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  width: ${GU * 12}px;
  height: ${GU * 12}px;
  background: ${colors.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
	justify-content: center;
  transition: all .5s ease;
  z-index: 105;
  &:hover,
  &:focus,
  &:active {
    background: ${colors.grey};
    cursor: pointer;

    #sandwhich-line {
      background: ${colors.white};
    }
  }

  ${media.xs`
    left: 4rem;
    width: ${GU * 14}px;
    height: ${GU * 14}px;
  `}
`

interface IButtonMenuLine {
  width: number;
}

const ButtonMenuLine = styled.div<IButtonMenuLine>`
  background: ${colors.black};

  ${props => css`
    width: ${props.width * .8}px;
    height: 2px;
    margin: 0 auto;

    ${media.xs`
      width: ${props.width * .9}px;
      height: 3px;
      margin: 0 auto;
    `}
  `};
`
