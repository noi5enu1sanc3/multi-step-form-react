import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// import { goNext } from '../FormNav/formUpdaterSlice';
import './PersonalInfo.scss';
import SectionWithForm from '../SectionWithForm/SectionWithForm';

function PersonalInfo({
  // setIsValid,
  handleUpdate,
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const personalData = useSelector((state) => state.formUpdater.data.personal);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    // setIsValid(evt.target.closest('.js-form').checkValidity());
  };

  const handleSubmitPersonal = () => {
    handleUpdate({ personal: values });
  };

  useEffect(() => {
    setValues(personalData);
  }, []);

  return (
    <SectionWithForm
      name="personal"
      title="Personal Info"
      subtitle="Please provide your name, e-mail address, and phone number."
      onUpdate={handleSubmitPersonal}
    >
      <label htmlFor="userName" className="personal-info-label">
        <span className="personal-info-label-text">Name</span>
        <span className="personal-info-error-text">{errors.userName}</span>
        <input
          type="text"
          name="userName"
          id="userName"
          className={`personal-info-input ${errors.userName ? 'personal-info-input_state_error' : ''}`}
          placeholder="e.g. Stephen King"
          value={values.userName || ''}
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
          className={`personal-info-input ${errors.email ? 'personal-info-input_state_error' : ''}`}
          placeholder="e.g. stephenking@lorem.com"
          value={values.email || ''}
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
          className={`personal-info-input ${errors.phone ? 'personal-info-input_state_error' : ''}`}
          placeholder="e.g. +1 234 567 890"
          value={values.phone || ''}
          onChange={handleChange}
          required
        />
      </label>
    </SectionWithForm>
    // <section className="personal-info section-default">
    //   <h2 className="personal-info__title">Personal Info</h2>
    //   <p className="personal-info__subtitle">
    //     Please provide your name, e-mail address, and phone number.
    //   </p>
    //   <form className="personal-info-form js-form" noValidate onSubmit={handleSubmit}>
    //     <label htmlFor="userName" className="personal-info-label">
    //       <span className="personal-info-label-text">Name</span>
    //       <span className="personal-info-error-text">{errors.userName}</span>
    //       <input
    //         type="text"
    //         name="userName"
    //         id="userName"
    //         className={`personal-info-input ${errors.userName
    // ? 'personal-info-input_state_error' : ''}`}
    //         placeholder="e.g. Stephen King"
    //         value={values.userName || ''}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>
    //     <label htmlFor="userEmail" className="personal-info-label">
    //       <span className="personal-info-label-text">E-mail</span>
    //       <span className="personal-info-error-text">{errors.email}</span>
    //       <input
    //         type="email"
    //         name="email"
    //         id="userEmail"
    //         className={`personal-info-input ${errors.email
    // ? 'personal-info-input_state_error' : ''}`}
    // //         placeholder="e.g. stephenking@lorem.com"
    // //         value={values.email || ''}
    // //         onChange={handleChange}
    // //         required
    // //       />
    // //     </label>
    // //     <label htmlFor="userPhone" className="personal-info-label">
    // //       <span className="personal-info-label-text">Phone number</span>
    // //       <span className="personal-info-error-text">{errors.phone}</span>
    // //       <input
    // //         type="tel"
    // //         name="phone"
    // //         id="userPhone"
    // //         className={`personal-info-input ${errors.phone
    // ? 'personal-info-input_state_error' : ''}`}
    // //         placeholder="e.g. +1 234 567 890"
    // //         value={values.phone || ''}
    // //         onChange={handleChange}
    // //         required
    // //       />
    // //     </label>
    // //   </form>
    // // </section>
  );
}

PersonalInfo.propTypes = {
  // userData: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  //   plan: PropTypes.string.isRequired,
  //   billingOption: PropTypes.string.isRequired,
  //   addOns: PropTypes.instanceOf(Set).isRequired,
  // }).isRequired,
  // handleChange: PropTypes.func.isRequired,
  // errors: PropTypes.objectOf(PropTypes.string).isRequired,
  // setIsValid: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default PersonalInfo;
