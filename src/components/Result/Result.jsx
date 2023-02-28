// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import { RESULT_SUBTITLE_SUCESS, RESULT_TITLE_SUCESS } from '../../utils/constants';
import './Result.scss';

function Result() {
  const userInfo = useSelector((state) => state.formUpdater.data.personal);
  const { userName, email } = userInfo;

  return (
    <section className="section-default result-section">
      <div className="result-section__message-container">
        <div className="result-section__icon_success" />
        <h2 className="result-section__title">
          {`${RESULT_TITLE_SUCESS}, ${userName}!`}
        </h2>
        <p className="result-section__text">
          {`${RESULT_SUBTITLE_SUCESS}
          Please check ${email} for details.`}
        </p>
      </div>
    </section>
  );
}

export default Result;
