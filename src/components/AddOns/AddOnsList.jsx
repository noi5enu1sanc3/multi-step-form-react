import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import AddOnItem from './AddOnItem';

function AddOnsList({ values, setValues }) {
  return (
    <ul>
      {
          servicesData.addons.map((addon) => (
            <AddOnItem
              key={addon.id}
              addon={addon}
              values={values}
              setValues={setValues}
            />
          ))
        }
    </ul>
  );
}

AddOnsList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  })).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default AddOnsList;
