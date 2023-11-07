import React from 'react';
import { Container, Stepper, Step, StepLabel, Grid, Card } from '@mui/material';

interface StepWrapperProps {
  activeStep: number;
  children: any;
}

const steps = ['Track info', 'Upload cover', 'Upload track'];

const StepWrapper = ({ activeStep, children }: StepWrapperProps) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
