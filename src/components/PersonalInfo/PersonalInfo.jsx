import './PersonalInfo.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function PersonalInfo({ userData, handleChange, errors }) {
  const { userName, email, phone } = userData;

  return (
    <section className="personal-info section-default">
      <h2 className="personal-info__title">Personal Info</h2>
      <p className="personal-info__subtitle">
        Please provide your name, e-mail address, and phone number.
      </p>
      <form className="personal-info-form js-form" noValidate>
        <label htmlFor="userName" className="personal-info-label">
          <span className="personal-info-label-text">Name</span>
          <span className="personal-info-error-text">{errors.userName}</span>
          <input
            type="text"
            name="userName"
            id="userName"
            className="personal-info-input"
            placeholder="e.g. Stephen King"
            value={userName || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="userEmail" className="personal-info-label">
          <span className="personal-info-label-text">E-mail</span>
          <span className="personal-info-error-text">{errors.email}</span>
          <input
            type="email"
            name="email"
            id="userEmail"
            className="personal-info-input personal-info-input_state_error"
            placeholder="e.g. stephenking@lorem.com"
            value={email || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="userPhone" className="personal-info-label">
          <span className="personal-info-label-text">Phone number</span>
          <span className="personal-info-error-text">{errors.phone}</span>
          <input
            type="tel"
            name="phone"
            id="userPhone"
            className="personal-info-input"
            placeholder="e.g. +1 234 567 890"
            value={phone || ''}
            onChange={handleChange}
            required
          />
        </label>
      </form>
    </section>
  );
}

PersonalInfo.propTypes = {
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PersonalInfo;
