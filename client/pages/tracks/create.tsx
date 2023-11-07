import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import StepWrapper from 'components/StepWrapper';
import FileUpload from 'components/FileUpload';
import { Button, Grid, TextField } from '@mui/material';

const CreateTrackPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  const next = () => {
    if (activeStep === 2) return;
    setActiveStep((prev) => prev + 1);
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
            <TextField style={{ marginTop: 10 }} label={'Track name'} />
            <TextField style={{ marginTop: 10 }} label={'Artist name'} />
            <TextField
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
          <FileUpload setFile={setAudio} accept="image/*">
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
