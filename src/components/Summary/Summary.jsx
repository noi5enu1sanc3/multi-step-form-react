import './Summary.scss';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jumpToStep } from '../FormNav/formUpdaterSlice';
import SectionWithForm from '../SectionWithForm/SectionWithForm';
import {
  BILLING_SECTION_STEP_NUMBER,
  RESULT_SECTION_STEP_NUMBER,
  SUMMARY_SUBTITLE,
  SUMMARY_TITLE,
} from '../../utils/constants';
import SummaryContent from './SummaryContent';

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

  return (
    <SectionWithForm
      className="summary section-default"
      name="summary"
      title={SUMMARY_TITLE}
      subtitle={SUMMARY_SUBTITLE}
      onSubmit={handleSubmitSubscription}
    >
      <SummaryContent
        billing={billing}
        addOns={addOns}
        totalCost={totalCost}
        onJump={() => handleJump(BILLING_SECTION_STEP_NUMBER)}
      />
    </SectionWithForm>
  );
}

export default Summary;
