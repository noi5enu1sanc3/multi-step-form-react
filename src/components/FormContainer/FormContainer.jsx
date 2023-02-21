// import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import './FormContainer.scss';
import AddOns from '../AddOns/AddOns';
import Summary from '../Summary/Summary';
import Billing from '../Billing/Billing';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
// import FormNav from '../FormNav/FormNav';
import { setData } from '../FormNav/formUpdaterSlice';
// import useFormAndValidation from '../../hooks/useFormAndValidation';

function FormContainer() {
  // const [userData, setUserData] = useState({
  //   personal: {
  //     userName: '',
  //     email: '',
  //     phone: '',
  //   },
  //   billing: { plan: 'arcade', cost: 9, monthly: true },
  //   addOns: [],
  // });

  const currentStep = useSelector((state) => state.formUpdater.step);

  // const [errors, setErrors] = useState({});
  // const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = (data) => { dispatch(setData(data)); };

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setUserData({ ...userData, [name]: value });
  //   setErrors({ ...errors, [name]: evt.target.validationMessage });
  //   setIsValid(evt.target.closest('.js-form').checkValidity());
  // };

  const renderCurrentComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            // setIsValid={setIsValid}
            handleUpdate={handleUpdate}
          />
        );
      case 2:
        return (
          <Billing
            handleUpdate={handleUpdate}
          />
        );
      case 3:
        return (
          <AddOns
            handleUpdate={handleUpdate}
          />
        );
      case 4:
        return (
          <Summary />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      {renderCurrentComponent(currentStep)}
      {/* <FormNav
        isNextButtonActive={currentStep === 1 ? isValid : true}
        handleUpdate={handleUpdate}
      /> */}
    </div>
  );
}

export default FormContainer;
