import PropTypes from 'prop-types';

function BillingOptionItem({
  name, cost, values, setValues, optionType,
}) {
  const { plan } = values;

  const handlePlanChange = (evt) => {
    if (evt.target.checked) {
      setValues({
        ...values,
        plan: evt.target.value,
        cost,
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
          <div className={`billing-options-icon billing-options-icon_type_${optionType}`} />
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
  values: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    monthly: PropTypes.bool.isRequired,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default BillingOptionItem;
