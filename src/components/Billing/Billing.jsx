import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Billing.scss';
import PropTypes from 'prop-types';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import { BILLING_SUBTITLE, BILLING_TITLE } from '../../utils/constants';
import BillingSlider from './BillingSlider';
import BillingOptionsList from './BillingOptionsList';

function Billing({ handleUpdate }) {
  const [values, setValues] = useState({ plan: 'arcade', cost: 9, monthly: true });

  const billingData = useSelector((state) => state.formUpdater.data.billing);

  const handleSubmitBilling = () => { handleUpdate({ billing: values }); };

  useEffect(() => {
    setValues(billingData);
  }, []);

  return (
    <SectionWithForm
      name="billing"
      title={BILLING_TITLE}
      subtitle={BILLING_SUBTITLE}
      onUpdate={handleSubmitBilling}
    >
      <BillingOptionsList values={values} setValues={setValues} />
      <BillingSlider monthly={values.monthly} setValues={setValues} />
    </SectionWithForm>
  );
}

Billing.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default Billing;
