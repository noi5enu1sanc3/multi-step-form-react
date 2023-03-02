import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal, goBack, goNext } from '../../store/formUpdaterSlice';
import './FormNav.scss';
import { SUMMARY_SECTION_STEP_NUMBER } from '../../utils/constants';

function FormNav({
  isNextButtonActive,
  onUpdate,
  onSubmit,
}) {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const dispatch = useDispatch();

  const handleNext = (evt) => {
    evt.preventDefault();
    onUpdate();

    if (currentStep + 1 === SUMMARY_SECTION_STEP_NUMBER) {
      dispatch(calculateTotal());
    }

    dispatch(goNext());
  };

  const handleBack = (evt) => {
    evt.preventDefault();
    if (currentStep !== SUMMARY_SECTION_STEP_NUMBER) onUpdate();
    dispatch(goBack());
  };

  const handleConfirm = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <nav className="form-nav">
      <button
        type="button"
        className={`form-nav__button form-nav__button_direction_back ${currentStep === 1 && 'form-nav__button_direction_back_hidden'}`}
        onClick={handleBack}
      >
        <span>Go back</span>
      </button>
      <button
        type="submit"
        className={`form-nav__button form-nav__button_direction_next ${
          !isNextButtonActive ? 'form-nav__button_direction_next_state_disabled' : ''
        }`}
        onClick={currentStep === SUMMARY_SECTION_STEP_NUMBER ? handleConfirm : handleNext}
        disabled={!isNextButtonActive}
      >
        <span>{currentStep === SUMMARY_SECTION_STEP_NUMBER ? 'Confirm' : 'Next step'}</span>
      </button>
    </nav>
  );
}

FormNav.defaultProps = {
  isNextButtonActive: true,
  onUpdate: undefined,
  onSubmit: undefined,
};

FormNav.propTypes = {
  onUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
  isNextButtonActive: PropTypes.bool,
};

export default FormNav;
