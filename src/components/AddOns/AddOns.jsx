import './AddOns.scss';

function AddOns() {
  return (
    <section className="add-ons">
      <h2 className="add-ons__title">Pick add-ons</h2>
      <p className="add-ons__subtitle">Add-ons help enhance your gaming experience.</p>
      <form className="add-ons-form">
        <label htmlFor="service" className="add-ons-form__option">
          <input type="checkbox" id="service" className="add-ons-form__checkbox" />
          <div className="add-ons-form__pseudo-button">
            <span className="add-ons-form__pseudo-checkbox add-ons-form__pseudo-checkbox_state_checked" />
            <span className="add-ons-form__title">Online service</span>
            <span className="add-ons-form__subtitle">Access to multiplayer games</span>
            <span className="add-ons-form__cost">+1$/mo</span>
          </div>
        </label>
        <label htmlFor="storage" className="add-ons-form__option">
          <input type="checkbox" id="storage" className="add-ons-form__checkbox" />
          <div className="add-ons-form__pseudo-button">
            <span className="add-ons-form__pseudo-checkbox" />
            <span className="add-ons-form__title">Larger storage</span>
            <span className="add-ons-form__subtitle">Extra 1TB of cloud space</span>
            <span className="add-ons-form__cost">+2$/mo</span>
          </div>
        </label>
        <label htmlFor="profile" className="add-ons-form__option">
          <input type="checkbox" id="profile" className="add-ons-form__checkbox" />
          <div className="add-ons-form__pseudo-button">
            <span className="add-ons-form__pseudo-checkbox" />
            <span className="add-ons-form__title">Customizable profile</span>
            <span className="add-ons-form__subtitle">Custom theme for your profile</span>
            <span className="add-ons-form__cost">+2$/mo</span>
          </div>
        </label>
      </form>
    </section>
  );
}

export default AddOns;
