import { useDispatch, useSelector } from 'react-redux';
import './FormContainer.scss';
import AddOns from '../AddOns/AddOns';
import Summary from '../Summary/Summary';
import Billing from '../Billing/Billing';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { setData } from '../../store/formUpdaterSlice';
import Result from '../Result/Result';
import {
  ADDONS_SECTION_STEP_NUMBER,
  BILLING_SECTION_STEP_NUMBER,
  PERSONAL_INFO_SECTION_STEP_NUMBER,
  RESULT_SECTION_STEP_NUMBER,
  SUMMARY_SECTION_STEP_NUMBER,
} from '../../utils/constants';

function FormContainer() {
  const currentStep = useSelector((state) => state.formUpdater.step);

  const dispatch = useDispatch();
  const handleUpdate = (data) => { dispatch(setData(data)); };

  const renderCurrentComponent = (step) => {
    switch (step) {
      case PERSONAL_INFO_SECTION_STEP_NUMBER:
        return (
          <PersonalInfo
            handleUpdate={handleUpdate}
          />
        );
      case BILLING_SECTION_STEP_NUMBER:
        return (
          <Billing
            handleUpdate={handleUpdate}
          />
        );
      case ADDONS_SECTION_STEP_NUMBER:
        return (
          <AddOns
            handleUpdate={handleUpdate}
          />
        );
      case SUMMARY_SECTION_STEP_NUMBER:
        return (
          <Summary />
        );
      case RESULT_SECTION_STEP_NUMBER:
        return (
          <Result />
        );
      default:
        return null;
    }
  };

  const isContentCentered = currentStep === RESULT_SECTION_STEP_NUMBER ? 'form-container_centered-content' : '';

  return (
    <div className={`form-container ${isContentCentered}`}>
      {renderCurrentComponent(currentStep)}
    </div>
  );
}

export default FormContainer;
