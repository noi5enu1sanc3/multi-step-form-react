// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './StepsBar.scss';

function StepsBar({ currentStep }) {
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
    <nav className="steps-bar-container">
      <ul className="steps-bar-list">
        {
          stepsData.map((item) => (
            <li className="bar-item" key={item.step}>
              <button type="button" className="bar-item__button">
                <span className={`bar-item__step-number ${item.step === currentStep ? 'bar-item__step-number_active' : ''}`}>{item.step}</span>
                <span className="bar-item__step-title">{`STEP ${item.step}`}</span>
                <span className="bar-item__step-subtitle">{item.subtitle}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

StepsBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default StepsBar;
