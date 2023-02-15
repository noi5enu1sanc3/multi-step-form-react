import { useCallback, memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './FormNav.scss';

function FormNav({
  isNextButtonActive, currentStep, setCurrentStep,
}) {
  const goNext = useCallback(() => { setCurrentStep(currentStep + 1); }, [currentStep]);
  const goBack = useCallback(() => setCurrentStep(currentStep - 1), [currentStep]);
  return (
    <nav className="form-nav">
      <button
        type="button"
        className={`form-nav__button form-nav__button_direction_back ${currentStep === 1 && 'form-nav__button_direction_back_hidden'}`}
        onClick={goBack}
      >
        <span>Go back</span>
      </button>
      <button
        type="button"
        className={`form-nav__button form-nav__button_direction_next ${
          !isNextButtonActive ? 'form-nav__button_direction_next_state_disabled' : ''
        }`}
        onClick={goNext}
        disabled={!isNextButtonActive}
      >
        <span>Next step</span>
      </button>
    </nav>
  );
}

FormNav.defaultProps = {
  isNextButtonActive: true,
};

FormNav.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  isNextButtonActive: PropTypes.bool,
};

// export default FormNav;
export default memo(FormNav);
