import './Summary.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Summary({ userData, setCurrentStep }) {
  return (
    <section className="summary">
      <h2 className="summary__title">Finishing up</h2>
      <p className="summary__subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary__result-container">
        <div className="summary__billing-wrapper">
          <span className="summary__billing-plan">{`${userData.plan} (${userData.billingOption})`}</span>
          <button
            type="button"
            className="summary__change-button"
            onClick={() => setCurrentStep(2)}
          >
            <span className="summary__change-text">Change</span>
          </button>
          <span className="summary__plan-cost">{`$${userData.planCost}/mo`}</span>
        </div>
        <ul className="summary__add-ons-list">
          {
            Array.from(userData.addOns).map((addon) => (
              <li
                className="summary__add-ons-item"
                key={addon.id}
              >
                <span className="summary__add-ons-title">{addon.name}</span>
                <span className="summary__add-ons-cost">{`+$${addon.cost}/mo`}</span>
              </li>
            ))
          }
        </ul>
        <div className="summary__total-wrapper">
          <span className="summary__total-text">{`Total (per ${userData.billingOption === 'Monthly' ? 'month' : 'year'})`}</span>
          <span className="summary__total-sum">
            {`$${userData.planCost + (
              Array.from(userData.addOns).reduce((acc, cur) => acc + cur.cost, 0)
            )}/mo`}
          </span>
        </div>
      </div>
    </section>
  );
}

Summary.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
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
