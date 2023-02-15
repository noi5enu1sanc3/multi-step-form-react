import React from 'react';
import './Main.scss';
import StepsBar from '../StepsBar/StepsBar';
import FormContainer from '../FormContainer/FormContainer';

function Main() {
  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <main className="main">
      <StepsBar currentStep={currentStep} />
      <FormContainer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </main>
  );
}

export default Main;
