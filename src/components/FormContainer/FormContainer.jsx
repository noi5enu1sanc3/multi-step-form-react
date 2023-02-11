import React from 'react';
import './FormContainer.scss';
import AddOns from '../AddOns/AddOns';
import Summary from '../Summary/Summary';
import Billing from '../Billing/Billing';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import FormNav from '../FormNav/FormNav';
// import useFormAndValidation from '../../hooks/useFormAndValidation';

function FormContainer() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    billingOption: 'Monthly',
    addOns: new Set(),
    planCost: 0,
  });

  // const addData = (data) => {
  //   setUserData({
  //     ...userData,
  //     data,
  //   });
  //   console.log(userData);
  // };

  // const {
  //   values, handleChange, errors, isValid,
  // } = useFormAndValidation();

  const renderCurrentComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            // values={values}
            // errors={errors}
            // handleChange={handleChange}
            setUserData={setUserData}
            userData={userData}
          />
        );
      case 2:
        return (
          <Billing
            setUserData={setUserData}
            userData={userData}
          />
        );
      case 3:
        return (
          <AddOns
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 4:
        return (
          <Summary
            userData={userData}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return null;
    }
  };

  const goNext = () => { setCurrentStep(currentStep + 1); };
  const goBack = () => setCurrentStep(currentStep - 1);

  return (
    <div className="form-container">
      {renderCurrentComponent(currentStep)}
      <FormNav
        onNext={goNext}
        onBack={goBack}
        // isNextButtonActive={currentStep === 1 ? isValid : true}
        step={currentStep}
        // userInfo={values}
      />
    </div>
  );
}

export default FormContainer;
