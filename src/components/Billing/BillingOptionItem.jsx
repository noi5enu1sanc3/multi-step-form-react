// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function BillingOptionItem({
  name, cost, userData, setUserData,
}) {
  return (
    <li className="billing-options-item">
      <label htmlFor={name} className="billing-options-label">
        <input
          type="radio"
          id={name}
          value={name}
          name="billing-plan"
          checked={userData.plan === name}
          onChange={(evt) => {
            if (evt.target.checked) {
              setUserData({
                ...userData,
                plan: evt.target.value,
                planCost: cost,
              });
            }
          }}
        />
        <div className="billing-options-pseudo-button">
          <div className="billing-options-icon billing-options-icon_type_arcade" />
          <span className="billing-options-title">{name}</span>
          <span className="billing-options-subtitle">{`$${cost}/mo`}</span>
        </div>
      </label>
    </li>
  );
}

BillingOptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
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

export default BillingOptionItem;
