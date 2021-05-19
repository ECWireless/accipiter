import React from 'react';
import { colors } from 'components/theme';

import { StyledColumn, StyledContactForm, StyledInput } from './components'
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

export const ApplicationForm: React.FC = () => {
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus(prev => ({
      ...prev,
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    }))
  }

  return (
    <Container>
      <StyledContactForm>
        <Flex style={{ width: '100% '}}>
          <StyledColumn>
            <label htmlFor={'name'}>Your Name:</label>
            <StyledInput
              id={'name'}
              type={'text'}
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
            <Spacer size={'md'} />
            <label htmlFor={'email'}>Email:</label>
            <StyledInput
              id={'email'}
              type={'email'}
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <Spacer size={'md'} />
            <label htmlFor={'phone'}>Phone Number:</label>
            <StyledInput
              id={'phone'}
              type={'tel'}
              onChange={handleOnChange}
              required
              value={inputs.phone}
            />
          </StyledColumn>
          <StyledColumn>
            <label htmlFor={'name'}>Your Name:</label>
            <StyledInput
              id={'name'}
              type={'text'}
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
            <Spacer size={'md'} />
          </StyledColumn>
        </Flex>
      </StyledContactForm>
    </Container>
  )
}
