// import AddOns from '../AddOns/AddOns';
import FormNav from '../FormNav/FormNav';
import Summary from '../Summary/Summary';
// import Billing from '../Billing/Billing';
// import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './FormContainer.scss';

function FormContainer() {
  return (
    <div className="form-container">
      <Summary />
      <FormNav />
    </div>
  );
}

export default FormContainer;
