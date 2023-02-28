import './Summary.scss';
import { useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { jumpToStep } from '../FormNav/formUpdaterSlice';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import {
  BILLING_SECTION_STEP_NUMBER,
  RESULT_SECTION_STEP_NUMBER,
  SUMMARY_SUBTITLE,
  SUMMARY_TITLE,
} from '../../utils/constants';

function Summary() {
  const data = useSelector((state) => state.formUpdater.data);

  const {
    billing,
    addOns,
    totalCost,
  } = data;

  const dispatch = useDispatch();

  const handleJump = useCallback((step) => { dispatch(jumpToStep(step)); }, []);

  const handleSubmitSubscription = () => {
    handleJump(RESULT_SECTION_STEP_NUMBER);
  };

  const renderPlanCost = () => (
    <span
      className="summary__plan-cost"
    >
      {billing.monthly ? `$${billing.cost}/mo` : `$${billing.cost * 12}/y`}
    </span>
  );

  const renderTotalText = () => (
    <span
      className="summary__total-text"
    >
      {`Total (per ${billing.monthly ? 'month' : 'year'})`}
    </span>
  );

  return (
    <SectionWithForm
      className="summary section-default"
      name="summary"
      title={SUMMARY_TITLE}
      subtitle={SUMMARY_SUBTITLE}
      onSubmit={handleSubmitSubscription}
    >
      <div className="summary__result-container">
        <div className="summary__billing-wrapper">
          <span className="summary__billing-plan">{`${billing.plan} (${billing.monthly ? 'Monthly' : 'Yearly'})`}</span>
          <button
            type="button"
            className="summary__change-button"
            onClick={() => handleJump(BILLING_SECTION_STEP_NUMBER)}
          >
            <span className="summary__change-text">Change</span>
          </button>
          {renderPlanCost()}
        </div>
        <ul className="summary__add-ons-list">
          {
            [...addOns].map((addon) => (
              <li
                className="summary__add-ons-item"
                key={addon.id}
              >
                <span className="summary__add-ons-title">{addon.name}</span>
                <span
                  className="summary__add-ons-cost"
                >
                  {billing.monthly ? `+$${addon.cost}/mo` : `+$${addon.cost * 12}/y`}
                </span>
              </li>
            ))
          }
        </ul>
        <div className="summary__total-wrapper">
          {renderTotalText()}
          <span className="summary__total-sum">
            {`$${totalCost}/${billing.monthly ? 'mo' : 'y'}`}
          </span>
        </div>
      </div>
    </SectionWithForm>
  );
}

export default Summary;
