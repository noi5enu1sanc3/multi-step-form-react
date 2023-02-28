// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import FormNav from '../FormNav/FormNav';

function SectionWithForm({
  name,
  title,
  subtitle,
  onUpdate,
  onSubmit,
  isValid,
  children,
}) {
  return (
    <section className="section-default">
      <h2 className="section-default__title">{title}</h2>
      <p className="section-default__subtitle">{subtitle}</p>
      <form name={name} className="form-default js-form" onSubmit={onUpdate}>
        {children}
        <FormNav onUpdate={onUpdate} onSubmit={onSubmit} isNextButtonActive={isValid} />
      </form>
    </section>
  );
}

SectionWithForm.defaultProps = {
  isValid: true,
  onUpdate: undefined,
  onSubmit: undefined,
};

SectionWithForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
  isValid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SectionWithForm;
