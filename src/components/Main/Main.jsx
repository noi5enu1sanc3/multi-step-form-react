// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import './Main.scss';
import StepsBar from '../StepsBar/StepsBar';
import FormContainer from '../FormContainer/FormContainer';

function Main() {
  const currentStep = useSelector((state) => state.formUpdater.step);
  const isStepsBarVisible = currentStep !== 5;

  return (
    <main className="main">
      {isStepsBarVisible && <StepsBar />}
      <FormContainer />
    </main>
  );
}

export default Main;
