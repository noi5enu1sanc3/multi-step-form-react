import './AddOns.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import AddOnItem from './AddOnItem';

function AddOns({ userData, setUserData }) {
  return (
    <section className="add-ons">
      <h2 className="add-ons__title">Pick add-ons</h2>
      <p className="add-ons__subtitle">Add-ons help enhance your gaming experience.</p>
      <form className="add-ons-form">
        <ul>
          {
          servicesData.addons.map((addon) => (
            <AddOnItem
              key={addon.id}
              addon={addon}
              userData={userData}
              setUserData={setUserData}
            />
          ))
        }
        </ul>
      </form>
    </section>
  );
}

AddOns.propTypes = {
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

export default AddOns;
