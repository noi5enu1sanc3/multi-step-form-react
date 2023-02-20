import './Summary.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Summary({ userData, setCurrentStep }) {
  const {
    plan, planCost, billingOption, addOns,
  } = userData;

  const renderPlanCost = (option, cost) => (
    <span
      className="summary__plan-cost"
    >
      {option === 'Monthly' ? `$${cost}/mo` : `$${cost * 12}/y`}
    </span>
  );

  const renderAddonCost = (option, cost) => (
    <span
      className="summary__add-ons-cost"
    >
      {option === 'Monthly' ? `+$${cost}/mo` : `+$${cost * 12}/y`}
    </span>
  );

  const renderTotalText = (option) => (
    <span
      className="summary__total-text"
    >
      {`Total (per ${option === 'Monthly' ? 'month' : 'year'})`}
    </span>
  );

  const renderTotalCost = (option, cost, addonsArray) => (
    <span className="summary__total-sum">
      {option === 'Monthly' ? `$${cost + (
        addonsArray.reduce((acc, cur) => acc + cur.cost, 0)
      )}/mo` : `$${cost * 12 + (
        addonsArray.reduce((acc, cur) => acc + cur.cost * 12, 0)
      )}/y`}
    </span>
  );

  return (
    <section className="summary section-default">
      <h2 className="summary__title">Finishing up</h2>
      <p className="summary__subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary__result-container">
        <div className="summary__billing-wrapper">
          <span className="summary__billing-plan">{`${plan} (${billingOption})`}</span>
          <button
            type="button"
            className="summary__change-button"
            onClick={() => setCurrentStep(2)}
          >
            <span className="summary__change-text">Change</span>
          </button>
          {renderPlanCost(billingOption, planCost)}
        </div>
        <ul className="summary__add-ons-list">
          {
            [...addOns].map((addon) => (
              <li
                className="summary__add-ons-item"
                key={addon.id}
              >
                <span className="summary__add-ons-title">{addon.name}</span>
                {renderAddonCost(billingOption, addon.cost)}
              </li>
            ))
          }
        </ul>
        <div className="summary__total-wrapper">
          {renderTotalText(billingOption)}
          {renderTotalCost(billingOption, planCost, [...addOns])}
        </div>
      </div>
    </section>
  );
}

Summary.propTypes = {
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
    planCost: PropTypes.number.isRequired,
  }).isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default Summary;
