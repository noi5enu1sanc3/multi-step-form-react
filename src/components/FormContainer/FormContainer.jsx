import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './FormContainer.scss';
import AddOns from '../AddOns/AddOns';
import Summary from '../Summary/Summary';
import Billing from '../Billing/Billing';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import FormNav from '../FormNav/FormNav';
// import useFormAndValidation from '../../hooks/useFormAndValidation';

function FormContainer({ currentStep, setCurrentStep }) {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    billingOption: 'Monthly',
    addOns: new Set(),
    planCost: 9,
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('.js-form').checkValidity());
  };

  const renderCurrentComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            handleChange={handleChange}
            errors={errors}
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

  return (
    <div className="form-container">
      {renderCurrentComponent(currentStep)}
      <FormNav
        isNextButtonActive={currentStep === 1 ? isValid : true}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
}

FormContainer.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default FormContainer;
