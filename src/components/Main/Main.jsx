import { useSelector } from 'react-redux';
import './Main.scss';
import StepsBar from '../StepsBar/StepsBar';
import FormContainer from '../FormContainer/FormContainer';
import { RESULT_SECTION_STEP_NUMBER } from '../../utils/constants';

function Main() {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const isStepsBarVisible = currentStep !== RESULT_SECTION_STEP_NUMBER;

  return (
    <main className="main">
      {isStepsBarVisible && <StepsBar />}
      <FormContainer />
    </main>
  );
}

export default Main;
