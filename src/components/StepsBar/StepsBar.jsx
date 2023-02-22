// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './StepsBar.scss';

function StepsBar() {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const stepsData = [
    {
      step: 1,
      subtitle: 'YOUR INFO',
    },
    {
      step: 2,
      subtitle: 'SELECT PLAN',
    },
    {
      step: 3,
      subtitle: 'ADD_ONS',
    },
    {
      step: 4,
      subtitle: 'SUMMARY',
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
