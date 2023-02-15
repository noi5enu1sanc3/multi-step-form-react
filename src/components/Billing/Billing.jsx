import './Billing.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import BillingOptionItem from './BillingOptionItem';

function Billing({ userData, setUserData }) {
  const { billingOption } = userData;

  const handleBillingOptionChange = (evt) => {
    if (!evt.target.checked) {
      setUserData({
        ...userData,
        billingOption: 'Monthly',
      });
    } else {
      setUserData({
        ...userData,
        billingOption: 'Yearly',
      });
    }
  };

  return (
    <section className="billing">
      <h2 className="billing__title">Select your plan</h2>
      <p className="billing__subtitle">You have the option of monthly or yearly billing.</p>
      <form className="billing-form">
        <fieldset className="billing-options-buttons-container">
          <ul className="billing-options-buttons-list">
            {
              servicesData.billingPlans.map((data) => (
                <BillingOptionItem
                  key={data.id}
                  name={data.name}
                  cost={data.cost}
                  userData={userData}
                  setUserData={setUserData}
                />
              ))
            }
          </ul>
        </fieldset>
        <div className="billing-options-period-container">
          <span className="billing-options-period-text">Monthly</span>
          <label htmlFor="billing-option" className="billing-options-period-label">
            <input
              type="checkbox"
              id="billing-option"
              className={`billing-options-period-input ${billingOption === 'Yearly' ? 'billing-options-period-input_state_checked' : ''}`}
              checked={billingOption === 'Yearly'}
              onChange={handleBillingOptionChange}
            />
            <div className="billing-options-period-slider" />
          </label>
          <span className="billing-options-period-text">Yearly</span>
        </div>
      </form>
    </section>
  );
}

Billing.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default Billing;
