function AddOns() {
  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <fieldset>
        <label htmlFor="service">
          <input type="checkbox" id="service" />
          <span>Online service</span>
          <span>Access to multiplayer games</span>
          <span>+1$/mo</span>
        </label>
        <label htmlFor="storage">
          <input type="checkbox" id="storage" />
          <span>Larger storage</span>
          <span>Extra 1TB of cloud space</span>
          <span>+2$/mo</span>
        </label>
        <label htmlFor="profile">
          <input type="checkbox" id="profile" />
          <span>Customizable profile</span>
          <span>Custom theme for your profile</span>
          <span>+2$/mo</span>
        </label>
      </fieldset>
    </div>
  );
}

export default AddOns;
