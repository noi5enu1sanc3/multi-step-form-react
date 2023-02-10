import './PersonalInfo.scss';

function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2 className="personal-info__title">Personal Info</h2>
      <p className="personal-info__subtitle">Please provide your name, e-mail address, and phone number.</p>
      <form className="personal-info-form">
        <label htmlFor="userName" className="personal-info-label">
          <span className="personal-info-label-text">Name</span>
          <span className="personal-info-error-text">Error text</span>
          <input type="text" name="name" id="userName" className="personal-info-input" placeholder="e.g. Stephen King" />
        </label>
        <label htmlFor="userEmail" className="personal-info-label">
          <span className="personal-info-label-text">E-mail</span>
          <span className="personal-info-error-text">Error text</span>
          <input type="email" name="email" id="userEmail" className="personal-info-input personal-info-input_state_error" />
        </label>
        <label htmlFor="userPhone" className="personal-info-label">
          <span className="personal-info-label-text">Phone number</span>
          <span className="personal-info-error-text">Error text</span>
          <input type="tel" name="phone" id="userPhone" className="personal-info-input" />
        </label>
      </form>
    </section>
  );
}

export default PersonalInfo;
