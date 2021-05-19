import React from 'react';
import { colors } from 'components/theme';

import {
  StyledColumn,
  StyledColumnContainer,
  StyledContactForm,
  StyledFileInput,
  StyledInput,
  StyledTextArea,
} from './components'
import { Button } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Snackbar from 'components/Snackbar';
import Spacer from 'components/Spacer';
import Spinner from 'components/Spinner';

export const ApplicationForm: React.FC = () => {
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  // const [selectedFile, setSelectedFile] = React.useState<File>();
	// const [isFilePicked, setIsFilePicked] = React.useState<boolean>(false);

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  })

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }

  const onHandleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files[0]) {
      return;
    }

		// setSelectedFile(event.target.files[0]);
    const convertedFile = await getBase64(event.target.files[0]);
    
    setInputs(prev => ({
      ...prev,
      file: convertedFile
    }))
		// setIsFilePicked(true);
    console.log(event.target.files[0])
	};

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
        file: null,
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
    const res = await fetch('/api/careers', {
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
    <Container>
      <StyledContactForm onSubmit={handleOnSubmit}>
        <StyledColumnContainer style={{ width: '100% '}}>
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
            <Spacer size={'md'} />
            <label htmlFor={'email'}>Upload Resume (only PDFs accepted):</label>
            <Spacer size={'sm'} />
            <StyledFileInput
              type={'file'}
              name={'file'}
              accept={'application/pdf'}
              onChange={onHandleFileUpload}
            />
          </StyledColumn>
          <Spacer size={'md'} />
          <StyledColumn>
            <label htmlFor={'name'}>Introduction:</label>
            <StyledTextArea
              id={'message'}
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <Spacer size={'md'} />
          </StyledColumn>
        </StyledColumnContainer>
        <Spacer size={'md'} />
        <Flex align={'center'} style={{ width: '100%' }}>
          <Button
            style={{
              margin: '0 auto',
              width: '50%'
            }}
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
        </Flex>
      </StyledContactForm>
      { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
    </Container>
  )
}
