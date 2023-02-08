// import AddOns from '../AddOns/AddOns';
import FormNav from '../FormNav/FormNav';
import Summary from '../Summary/Summary';
// import Billing from '../Billing/Billing';
// import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './FormContainer.scss';

function FormContainer() {
  return (
    <section>
      <Summary />
      <FormNav />
    </section>
  );
}

export default FormContainer;
