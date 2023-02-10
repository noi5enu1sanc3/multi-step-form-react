import './Summary.scss';

function Summary() {
  return (
    <section className="summary">
      <h2 className="summary__title">Finishing up</h2>
      <p className="summary__subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary__result-container">
        <div className="summary__billing-wrapper">
          <span className="summary__billing-plan">Billing plan (billing type)</span>
          <button type="button" className="summary__change-button"><span className="summary__change-text">Change</span></button>
          <span className="summary__plan-cost">$9/mo</span>
        </div>
        <ul className="summary__add-ons-list">
          <li className="summary__add-ons-item">
            <span className="summary__add-ons-title">Optional add-on</span>
            <span className="summary__add-ons-cost">+$1/mo</span>
          </li>
          <li className="summary__add-ons-item">
            <span className="summary__add-ons-title">Optional add-on</span>
            <span className="summary__add-ons-cost">+$1/mo</span>
          </li>
        </ul>
        <div className="summary__total-wrapper">
          <span className="summary__total-text">Total (per month)</span>
          <span className="summary__total-sum">$12/mo</span>
        </div>
      </div>
    </section>
  );
}

export default Summary;
