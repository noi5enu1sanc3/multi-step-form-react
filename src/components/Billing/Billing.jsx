import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './Billing.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import BillingOptionItem from './BillingOptionItem';
import SectionWithForm from '../SectionWithForm/SectionWithForm';

function Billing({ handleUpdate }) {
  const [values, setValues] = useState({ plan: 'arcade', cost: 9, monthly: true });

  const [isChecked, setIsChecked] = useState(false);

  const billingData = useSelector((state) => state.formUpdater.data.billing);

  const handleBillingOptionChange = () => {
    setIsChecked((prev) => !prev);
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
      title="Select your plan"
      subtitle="You have the option of monthly or yearly billing."
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
          disabled={!isChecked}
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
            checked={isChecked}
            onChange={handleBillingOptionChange}
          />
          <div className="billing-options-period-slider" />
        </label>
        <button
          type="button"
          disabled={isChecked}
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
  // userData: PropTypes.shape({
  //   userName: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  //   plan: PropTypes.string.isRequired,
  //   billingOption: PropTypes.string.isRequired,
  //   addOns: PropTypes.instanceOf(Set).isRequired,
  // }).isRequired,
  // setUserData: PropTypes.func.isRequired,
};

export default Billing;
