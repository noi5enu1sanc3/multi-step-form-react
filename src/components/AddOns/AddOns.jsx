import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './AddOns.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import AddOnItem from './AddOnItem';
import SectionWithForm from '../SectionWithForm/SectionWithForm';

function AddOns({ handleUpdate }) {
  const [values, setValues] = useState([]);

  const addOnsData = useSelector((state) => state.formUpdater.data.addOns);

  const handleSubmitAddOns = () => { handleUpdate({ addOns: values }); };

  useEffect(() => {
    setValues(addOnsData);
  }, []);

  return (
    <SectionWithForm
      name="addOns"
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
      onUpdate={handleSubmitAddOns}
    >
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
    </SectionWithForm>
  );
}

AddOns.propTypes = {
  // userData: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  //   plan: PropTypes.string.isRequired,
  //   billingOption: PropTypes.string.isRequired,
  //   addOns: PropTypes.instanceOf(Set).isRequired,
  // }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default AddOns;
