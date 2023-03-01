// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function BillingSlider({ monthly, setValues }) {
  const handleBillingOptionChange = () => {
    if (!monthly) {
      setValues((values) => ({
        ...values,
        monthly: true,
      }));
    } else {
      setValues((values) => ({
        ...values,
        monthly: false,
      }));
    }
  };

  return (
    <div className="billing-options-period-container">
      <button
        type="button"
        disabled={monthly}
        className={
              `billing-options-period-text
              ${monthly
                ? 'billing-options-period-text_selected'
                : ''}`
          }
        onClick={handleBillingOptionChange}
      >
        Monthly
      </button>
      <label htmlFor="billing-option" className="billing-options-period-label">
        <input
          type="checkbox"
          id="billing-option"
          className={`billing-options-period-input ${!monthly
            ? 'billing-options-period-input_state_checked' : ''}`}
          checked={!monthly}
          onChange={handleBillingOptionChange}
        />
        <div className="billing-options-period-slider" />
      </label>
      <button
        type="button"
        disabled={!monthly}
        onClick={handleBillingOptionChange}
        className={
              `billing-options-period-text
              ${
                !monthly
                  ? 'billing-options-period-text_selected'
                  : ''
              }`
          }
      >
        Yearly
      </button>
    </div>
  );
}

BillingSlider.propTypes = {
  monthly: PropTypes.bool.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default BillingSlider;
