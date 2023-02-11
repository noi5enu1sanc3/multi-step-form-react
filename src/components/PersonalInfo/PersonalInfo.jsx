import './PersonalInfo.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function PersonalInfo({ userData, setUserData }) {
  return (
    <section className="personal-info">
      <h2 className="personal-info__title">Personal Info</h2>
      <p className="personal-info__subtitle">
        Please provide your name, e-mail address, and phone number.
      </p>
      <form className="personal-info-form js-form" noValidate>
        <label htmlFor="userName" className="personal-info-label">
          <span className="personal-info-label-text">Name</span>
          <span className="personal-info-error-text">error</span>
          <input
            type="text"
            name="name"
            id="userName"
            className="personal-info-input"
            placeholder="e.g. Stephen King"
            value={userData.name || ''}
            onChange={(evt) => setUserData({
              ...userData,
              name: evt.target.value,
            })}
            required
          />
        </label>
        <label htmlFor="userEmail" className="personal-info-label">
          <span className="personal-info-label-text">E-mail</span>
          <span className="personal-info-error-text">er</span>
          <input
            type="email"
            name="email"
            id="userEmail"
            className="personal-info-input personal-info-input_state_error"
            value={userData.email || ''}
            onChange={(evt) => setUserData({
              ...userData,
              email: evt.target.value,
            })}
            required
          />
        </label>
        <label htmlFor="userPhone" className="personal-info-label">
          <span className="personal-info-label-text">Phone number</span>
          <span className="personal-info-error-text">er</span>
          <input
            type="tel"
            name="phone"
            id="userPhone"
            className="personal-info-input"
            value={userData.phone || ''}
            onChange={(evt) => setUserData({
              ...userData,
              phone: evt.target.value,
            })}
            required
          />
        </label>
      </form>
    </section>
  );
}

PersonalInfo.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default PersonalInfo;
