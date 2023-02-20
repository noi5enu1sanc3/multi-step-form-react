// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function BillingOptionItem({
  name, cost, userData, setUserData, optionType,
}) {
  const { plan } = userData;

  const handlePlanChange = (evt) => {
    if (evt.target.checked) {
      setUserData({
        ...userData,
        plan: evt.target.value,
        planCost: cost,
      });
    }
  };

  return (
    <li className="billing-options-item">
      <label htmlFor={name} className="billing-options-label">
        <input
          type="radio"
          id={name}
          value={name}
          name="billing-plan"
          checked={plan === name}
          onChange={handlePlanChange}
        />
        <div className="billing-options-pseudo-button">
          <div className={`billing-options-icon billing-options-icon_type_${optionType.toLowerCase()}`} />
          <div className="billing-options-text-container">
            <span className="billing-options-title">{name}</span>
            <span className="billing-options-subtitle">{`$${cost}/mo`}</span>
          </div>
        </div>
      </label>
    </li>
  );
}

BillingOptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  optionType: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default BillingOptionItem;
