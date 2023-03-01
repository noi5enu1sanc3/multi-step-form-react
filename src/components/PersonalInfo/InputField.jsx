// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function InputField({
  type,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
}) {
  return (
    <label htmlFor={name} className="personal-info-label">
      <span className="personal-info-label-text">{label}</span>
      <span className="personal-info-error-text">{error}</span>
      <input
        type={type}
        name={name}
        id={name}
        className={`personal-info-input ${error ? 'personal-info-input_state_error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
