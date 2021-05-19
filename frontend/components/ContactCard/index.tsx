import React from 'react';
import { colors } from 'components/theme';

import {
  StyledContactForm,
  StyledInfoContainer,
  StyledInput,
  StyledInputContainer,
  StyledLine,
  StyledSvg,
  StyledTextArea,
} from './components'
import { Button } from 'components/Buttons';
import Snackbar from 'components/Snackbar';
import Spacer from 'components/Spacer';
import Spinner from 'components/Spinner';
import { P4, P5 } from 'components/Typography';

const ContactCard: React.FC = () => {
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

  const [snackbar, setSnackbar] = React.useState(false)

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus(prev => ({
        ...prev,
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      }))
      setInputs(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        message: '',
      }))
      setSnackbar(true)
    } else {
      setStatus(prev => ({
        ...prev,
        info: { error: true, msg: msg }
      }))
      setSnackbar(true)
    }
  }

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

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const onCloseSnackbar = () => {
    setSnackbar(false)
  }
  return (
    <StyledContactForm onSubmit={handleOnSubmit}>
      <StyledInputContainer>
        <label htmlFor={'name'}>Your Name:</label>
        <StyledInput
          id={'name'}
          type={'text'}
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <Spacer size={'sm'} />
        <label htmlFor={'email'}>Email:</label>
        <StyledInput
          id={'email'}
          type={'email'}
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <Spacer size={'sm'} />
        <label htmlFor={'phone'}>Phone Number:</label>
        <StyledInput
          id={'phone'}
          type={'tel'}
          onChange={handleOnChange}
          required
          value={inputs.phone}
        />
        <Spacer size={'sm'} />
        <label htmlFor={'message'}>Message:</label>
        <StyledTextArea
          id={'message'}
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <Spacer size={'sm'} />
        <div>
          <Button
            uppercase={'true'}
            weight={700}
            type={'submit'}
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
              ? 'Submit'
              : 'Submitted'
              : <Spinner color={colors.grey} />
            }
          </Button>
        </div>
      </StyledInputContainer>
      <StyledInfoContainer>
        <P4>
          For more information or to request a demo,
          please email:
        </P4>
        <Spacer size={'xs'} />
        <a style={{ textDecoration: 'none'}} href="mailto:information@accipitersystems.com">
          <P5 color={colors.white} bold>INFORMATION@ACCIPITERSYSTEMS.COM</P5>
        </a>
        <Spacer size={'xs'} />
        <StyledLine />
        <Spacer size={'sm'} />
        <a
          rel={'noreferrer noopener'} target={'_blank'}
          href={'https://www.linkedin.com/company/accipiter-systems/'}
        >
          <StyledSvg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <title>linkedin</title>
            <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
          </StyledSvg>
        </a>
      { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
      </StyledInfoContainer>
    </StyledContactForm>
  )
}

export default ContactCard;
