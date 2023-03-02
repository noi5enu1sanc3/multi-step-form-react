import { useSelector } from 'react-redux';
import {
  ADDONS_SECTION_STEP_NUMBER,
  ADDONS_STEP_TITLE,
  BILLING_SECTION_STEP_NUMBER,
  BILLING_STEP_TITLE,
  PERSONAL_INFO_SECTION_STEP_NUMBER,
  PERSONAL_INFO_STEP_TITLE,
  SUMMARY_SECTION_STEP_NUMBER,
  SUMMARY_STEP_TITLE,
} from '../../utils/constants';
import './StepsBar.scss';

function StepsBar() {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const stepsData = [
    {
      step: PERSONAL_INFO_SECTION_STEP_NUMBER,
      subtitle: PERSONAL_INFO_STEP_TITLE,
    },
    {
      step: BILLING_SECTION_STEP_NUMBER,
      subtitle: BILLING_STEP_TITLE,
    },
    {
      step: ADDONS_SECTION_STEP_NUMBER,
      subtitle: ADDONS_STEP_TITLE,
    },
    {
      step: SUMMARY_SECTION_STEP_NUMBER,
      subtitle: SUMMARY_STEP_TITLE,
    },
  ];

  return (
    <aside className="steps-bar-container">
      <ul className="steps-bar-list">
        {
            stepsData.map((item) => (
              <li className="bar-item" key={item.step}>
                <div type="button" className="bar-item__wrapper">
                  <span className={`bar-item__step-number ${item.step === currentStep ? 'bar-item__step-number_active' : ''}`}>{item.step}</span>
                  <span className="bar-item__step-title">{`STEP ${item.step}`}</span>
                  <span className="bar-item__step-subtitle">{item.subtitle}</span>
                </div>
              </li>
            ))
          }
      </ul>
    </aside>
  );
}

export default StepsBar;
