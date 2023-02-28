import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './AddOns.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import AddOnItem from './AddOnItem';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import { ADDONS_SUBTITLE, ADDONS_TITLE } from '../../utils/constants';

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
      title={ADDONS_TITLE}
      subtitle={ADDONS_SUBTITLE}
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
  handleUpdate: PropTypes.func.isRequired,
};

export default AddOns;
