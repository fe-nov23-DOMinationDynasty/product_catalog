/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';

import './backButton.scss';
import '../../styles/utils/text-styles.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button type="button" className="back-button small-text" onClick={goBack}>
        <i className="back-button__arrow-left" />
        Back
      </button>
    </>
  );
};
