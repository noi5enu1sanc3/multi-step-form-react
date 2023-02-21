import { memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal, goBack, goNext } from './formUpdaterSlice';
import './FormNav.scss';

function FormNav({
  isNextButtonActive,
  onUpdate,
}) {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const dispatch = useDispatch();

  const handleNext = (evt) => {
    evt.preventDefault();
    onUpdate();

    if (currentStep === 3) {
      dispatch(calculateTotal());
    }

    dispatch(goNext());
  };

  const handleBack = (evt) => {
    evt.preventDefault();
    onUpdate();
    dispatch(goBack());
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
        onClick={handleNext}
        disabled={!isNextButtonActive}
      >
        <span>{currentStep === 4 ? 'Confirm' : 'Next step'}</span>
      </button>
    </nav>
  );
}

FormNav.defaultProps = {
  isNextButtonActive: true,
};

FormNav.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  isNextButtonActive: PropTypes.bool,
  // handleUpdate: PropTypes.func.isRequired,
  // userData: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  //   plan: PropTypes.string.isRequired,
  //   billingOption: PropTypes.string.isRequired,
  //   addOns: PropTypes.instanceOf(Set).isRequired,
  // }).isRequired,
};

// export default FormNav;
export default memo(FormNav);
