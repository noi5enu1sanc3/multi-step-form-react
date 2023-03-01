// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function SummaryContent({
  billing,
  addOns,
  totalCost,
  onJump,
}) {
  const renderPlanCost = () => (
    <span
      className="summary__plan-cost"
    >
      {billing.monthly ? `$${billing.cost}/mo` : `$${billing.cost * 12}/y`}
    </span>
  );

  const renderTotalText = () => (
    <span
      className="summary__total-text"
    >
      {`Total (per ${billing.monthly ? 'month' : 'year'})`}
    </span>
  );

  return (
    <div className="summary__result-container">
      <div className="summary__billing-wrapper">
        <span className="summary__billing-plan">{`${billing.plan} (${billing.monthly ? 'Monthly' : 'Yearly'})`}</span>
        <button
          type="button"
          className="summary__change-button"
          onClick={onJump}
        >
          <span className="summary__change-text">Change</span>
        </button>
        {renderPlanCost()}
      </div>
      <ul className="summary__add-ons-list">
        {
          [...addOns].map((addon) => (
            <li
              className="summary__add-ons-item"
              key={addon.id}
            >
              <span className="summary__add-ons-title">{addon.name}</span>
              <span
                className="summary__add-ons-cost"
              >
                {billing.monthly ? `+$${addon.cost}/mo` : `+$${addon.cost * 12}/y`}
              </span>
            </li>
          ))
        }
      </ul>
      <div className="summary__total-wrapper">
        {renderTotalText()}
        <span className="summary__total-sum">
          {`$${totalCost}/${billing.monthly ? 'mo' : 'y'}`}
        </span>
      </div>
    </div>
  );
}

SummaryContent.propTypes = {
  billing: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    monthly: PropTypes.bool.isRequired,
  }).isRequired,
  addOns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  })).isRequired,
  totalCost: PropTypes.number.isRequired,
  onJump: PropTypes.func.isRequired,
};

export default SummaryContent;
