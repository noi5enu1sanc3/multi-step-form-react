import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './AddOns.scss';
import PropTypes from 'prop-types';
import AddOnsList from './AddOnsList';
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
      <AddOnsList values={values} setValues={setValues} />
    </SectionWithForm>
  );
}

AddOns.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default AddOns;
