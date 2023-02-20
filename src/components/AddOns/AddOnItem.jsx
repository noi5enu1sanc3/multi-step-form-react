// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function AddOnItem({
  addon, userData, setUserData,
}) {
  const { addOns } = userData;

  const getAddonId = (str) => str.replace(/\s+/g, '-').toLowerCase();
  const id = getAddonId(addon.name);

  const handleToggleAddOn = (evt) => {
    if (!evt.target.checked) {
      const updatedSet = userData.addOns;
      updatedSet.delete(addon);
      setUserData({
        ...userData,
        addOns: new Set(updatedSet),
      });
    } else {
      setUserData({
        ...userData,
        addOns: new Set(userData.addOns.add(addon)),
      });
    }
  };

  return (
    <li className="add-ons-form__option">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          className="add-ons-form__checkbox"
          checked={addOns.has(addon)}
          onChange={handleToggleAddOn}
        />
        <div className="add-ons-form__pseudo-button">
          <span className={`add-ons-form__pseudo-checkbox ${addOns.has(addon) ? 'add-ons-form__pseudo-checkbox_state_checked' : ''}`} />
          <span className="add-ons-form__title">{addon.name}</span>
          <span className="add-ons-form__subtitle">{addon.description}</span>
          <span className="add-ons-form__cost">{`+$${addon.cost}/mo`}</span>
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
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default AddOnItem;
