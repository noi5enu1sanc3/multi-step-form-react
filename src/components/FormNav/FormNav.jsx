// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './FormNav.scss';

function FormNav({
  onBack, onNext, isNextButtonActive, step,
}) {
  return (
    <nav className="form-nav">
      {step > 1 && (
      <button
        type="button"
        className="form-nav__button form-nav__button_direction_back"
        onClick={onBack}
      >
        <span>Go back</span>
      </button>
      )}
      <button
        type="button"
        className={`form-nav__button form-nav__button_direction_next ${
          !isNextButtonActive ? 'form-nav__button_direction_next_state_disabled' : ''
        }`}
        onClick={() => onNext()}
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
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  isNextButtonActive: PropTypes.bool,
  step: PropTypes.number.isRequired,
};

export default FormNav;
