import './Billing.scss';

function Billing() {
  return (
    <section className="billing">
      <h2 className="billing__title">Select your plan</h2>
      <p className="billing__subtitle">You have the option of monthly or yearly billing.</p>
      <form className="billing-form">
        <fieldset className="billing-options-buttons-container">
          <label htmlFor="arcade" className="billing-options-label">
            <input type="radio" id="arcade" value="arcade" name="billing-plan" />
            <div className="billing-options-pseudo-button">
              <div className="billing-options-icon billing-options-icon_type_arcade" />
              <span className="billing-options-title">Arcade</span>
              <span className="billing-options-subtitle">9$/mo</span>
            </div>
          </label>
          <label htmlFor="advanced" className="billing-options-label">
            <input type="radio" id="advanced" value="advanced" name="billing-plan" />
            <div className="billing-options-pseudo-button">
              <div className="billing-options-icon billing-options-icon_type_advanced" />
              <span className="billing-options-title">Advanced</span>
              <span className="billing-options-subtitle">12$/mo</span>
            </div>
          </label>
          <label htmlFor="pro" className="billing-options-label">
            <input type="radio" id="pro" value="pro" name="billing-plan" />
            <div className="billing-options-pseudo-button">
              <div className="billing-options-icon billing-options-icon_type_pro" />
              <span className="billing-options-title">Pro</span>
              <span className="billing-options-subtitle">15$/mo</span>
            </div>
          </label>
        </fieldset>
        <div className="billing-options-period-container">
          <span className="billing-options-period-text">Monthly</span>
          <label htmlFor="billing-option" className="billing-options-period-label">
            <input type="checkbox" id="billing-option-period" className="billing-options-period-input" />
            <div className="billing-options-period-slider" />
          </label>
          <span className="billing-options-period-text">Yearly</span>
        </div>
      </form>
    </section>
  );
}

export default Billing;
