import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './PersonalInfo.scss';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import {
  EMAIL_PLACEHOLDER,
  NAME_PLACEHOLDER,
  PERSONAL_INFO_SUBTITLE,
  PERSONAL_INFO_TITLE,
  PHONE_PLACEHOLDER,
} from '../../utils/constants';
import hasEmptyValue from '../../utils/hasEmptyValues';
import InputField from './InputField';

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
    setIsValid(!hasEmptyValue(personalData));
  }, []);

  return (
    <SectionWithForm
      name="personal"
      title={PERSONAL_INFO_TITLE}
      subtitle={PERSONAL_INFO_SUBTITLE}
      onUpdate={handleSubmitPersonal}
      isValid={isValid}
    >
      <InputField
        type="text"
        name="userName"
        label="Name"
        placeholder={NAME_PLACEHOLDER}
        value={values.userName || ''}
        error={errors.userName || ''}
        onChange={handleChange}
      />
      <InputField
        type="email"
        name="email"
        label="Email"
        placeholder={EMAIL_PLACEHOLDER}
        value={values.email || ''}
        error={errors.email || ''}
        onChange={handleChange}
      />
      <InputField
        type="tel"
        name="phone"
        label="Phone"
        placeholder={PHONE_PLACEHOLDER}
        value={values.phone || ''}
        error={errors.phone || ''}
        onChange={handleChange}
      />
    </SectionWithForm>
  );
}

PersonalInfo.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default PersonalInfo;
