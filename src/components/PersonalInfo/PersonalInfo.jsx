import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './PersonalInfo.scss';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { PERSONAL_INFO_SUBTITLE, PERSONAL_INFO_TITLE } from '../../utils/constants';

function PersonalInfo({
  handleUpdate,
}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
  } = useFormAndValidation();

  const personalData = useSelector((state) => state.formUpdater.data.personal);

  const handleSubmitPersonal = () => {
    handleUpdate({ personal: values });
  };

  useEffect(() => {
    setValues(personalData);
    setIsValid();
  }, []);

  return (
    <SectionWithForm
      name="personal"
      title={PERSONAL_INFO_TITLE}
      subtitle={PERSONAL_INFO_SUBTITLE}
      onUpdate={handleSubmitPersonal}
      isValid={isValid}
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
  );
}

PersonalInfo.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default PersonalInfo;
