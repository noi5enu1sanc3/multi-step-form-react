import PropTypes from 'prop-types';

function AddOnItem({
  addon, values, setValues,
}) {
  const addOns = values;

  const getAddonId = (str) => str.replace(/\s+/g, '-').toLowerCase();
  const id = getAddonId(addon.name);

  const { name, cost, description } = addon;

  const handleToggleAddOn = (evt) => {
    if (!evt.target.checked) {
      const updatedArray = values.filter((item) => item !== addon);
      setValues(updatedArray);
    } else {
      setValues([...values, addon]);
    }
  };

  return (
    <li className="add-ons-form__option">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          className="add-ons-form__checkbox"
          checked={addOns.includes(addon)}
          onChange={handleToggleAddOn}
        />
        <div className="add-ons-form__pseudo-button">
          <span className={`add-ons-form__pseudo-checkbox ${addOns.includes(addon) ? 'add-ons-form__pseudo-checkbox_state_checked' : ''}`} />
          <span className="add-ons-form__title">{name}</span>
          <span className="add-ons-form__subtitle">{description}</span>
          <span className="add-ons-form__cost">{`+$${cost}/mo`}</span>
        </div>
      </label>
    </li>
  );
}

AddOnItem.propTypes = {
  addon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  })).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default AddOnItem;
