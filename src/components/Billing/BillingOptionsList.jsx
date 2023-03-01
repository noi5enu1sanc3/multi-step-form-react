// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import servicesData from '../../utils/services.json';
import BillingOptionItem from './BillingOptionItem';

function BillingOptionsList({ values, setValues }) {
  return (
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
  );
}

BillingOptionsList.propTypes = {
  values: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    monthly: PropTypes.bool.isRequired,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default BillingOptionsList;
