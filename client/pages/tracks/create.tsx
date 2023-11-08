import React, { useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import StepWrapper from 'components/StepWrapper';
import FileUpload from 'components/FileUpload';
import { Button, Grid, TextField } from '@mui/material';
import { useInput } from 'hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';

const CreateTrackPage = () => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture ?? '');
      formData.append('audio', audio ?? '');
      axios
        .post('http://localhost:2828/tracks', formData)
        .then(() => router.push('/tracks'))
        .catch((e) => console.log('post track:', e));
    }
  };

  const back = () => {
    if (activeStep === 0) return;
    setActiveStep((prev) => prev - 1);
  };

  return (
    <DefaultLayout>
      <StepWrapper activeStep={activeStep}>
        <h1>STEP {activeStep + 1}</h1>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label={'Track name'}
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label={'Artist name'}
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={'Track text'}
              multiline
              rows={3}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload cover</Button>
            <Button></Button>
          </FileUpload>
        )}

        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload audio</Button>
            <Button></Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </DefaultLayout>
  );
};

export default CreateTrackPage;
