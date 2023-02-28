import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './Billing.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import BillingOptionItem from './BillingOptionItem';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import { BILLING_SUBTITLE, BILLING_TITLE } from '../../utils/constants';

function Billing({ handleUpdate }) {
  const [values, setValues] = useState({ plan: 'arcade', cost: 9, monthly: true });

  const billingData = useSelector((state) => state.formUpdater.data.billing);

  const handleBillingOptionChange = () => {
    if (!values.monthly) {
      setValues({
        ...values,
        monthly: true,
      });
    } else {
      setValues({
        ...values,
        monthly: false,
      });
    }
  };

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

      <fieldset className="billing-options-buttons-container">
        <ul className="billing-options-buttons-list">
          {
              servicesData.billingPlans.map((data) => (
                <BillingOptionItem
                  key={data.id}
                  name={data.name}
                  cost={data.cost}
                  optionType={data.name}
                  values={values}
                  setValues={setValues}
                />
              ))
            }
        </ul>
      </fieldset>
      <div className="billing-options-period-container">
        <button
          type="button"
          disabled={values.monthly}
          className={
              `billing-options-period-text
              ${values.monthly
                ? 'billing-options-period-text_selected'
                : ''}`
          }
          onClick={handleBillingOptionChange}
        >
          Monthly
        </button>
        <label htmlFor="billing-option" className="billing-options-period-label">
          <input
            type="checkbox"
            id="billing-option"
            className={`billing-options-period-input ${!values.monthly
              ? 'billing-options-period-input_state_checked' : ''}`}
            checked={!values.monthly}
            onChange={handleBillingOptionChange}
          />
          <div className="billing-options-period-slider" />
        </label>
        <button
          type="button"
          disabled={!values.monthly}
          onClick={handleBillingOptionChange}
          className={
              `billing-options-period-text
              ${
                !values.monthly
                  ? 'billing-options-period-text_selected'
                  : ''
              }`
          }
        >
          Yearly
        </button>
      </div>

    </SectionWithForm>
  );
}

Billing.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default Billing;
