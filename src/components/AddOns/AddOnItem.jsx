// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function AddOnItem({
  addon, userData, setUserData,
}) {
  return (
    <li>
      <label htmlFor={`${addon.name.replace(/\s+/g, '-')}`} className="add-ons-form__option">
        <input
          type="checkbox"
          id={`${addon.name.replace(/\s+/g, '-')}`}
          className="add-ons-form__checkbox"
          checked={userData.addOns.has(addon)}
          onChange={(evt) => {
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
          }}
        />
        <div className="add-ons-form__pseudo-button">
          <span className={`add-ons-form__pseudo-checkbox ${userData.addOns.has(addon) ? 'add-ons-form__pseudo-checkbox_state_checked' : ''}`} />
          <span className="add-ons-form__name">{addon.name}</span>
          <span className="add-ons-form__subname">{addon.description}</span>
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
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    billingOption: PropTypes.string.isRequired,
    addOns: PropTypes.instanceOf(Set).isRequired,
  }).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default AddOnItem;
