function Billing() {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <fieldset>
        <label htmlFor="arcade">
          <span>Arcade</span>
          <span>9 $/mo</span>
          <input type="radio" id="arcade" value="arcade" name="billing-plan" />
        </label>
        <label htmlFor="advanced">
          <span>Advanced</span>
          <span>12 $/mo</span>
          <input type="radio" id="advanced" value="advanced" name="billing-plan" />
        </label>
        <label htmlFor="pro">
          <span>Pro</span>
          <span>15 $/mo</span>
          <input type="radio" id="pro" value="pro" name="billing-plan" />
        </label>
      </fieldset>
      <label htmlFor="billing-option">
        <span>Monthly</span>
        <input type="checkbox" />
        <span>Yearly</span>
      </label>
    </div>
  );
}

export default Billing;
