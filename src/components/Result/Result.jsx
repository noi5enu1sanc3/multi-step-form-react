import './Result.scss';

function Result() {
  return (
    <section className="section-default result-section">
      <div className="result-section__message-container">
        <div className="result-section__icon_success" />
        <h2 className="result-section__title">Thank you!</h2>
        <p className="result-section__text">
          Thanks for confirming your subscription!
          We hope you have fun using our platform.
        </p>
      </div>
    </section>
  );
}

export default Result;
