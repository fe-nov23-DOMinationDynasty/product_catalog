/* eslint-disable jsx-a11y/control-has-associated-label */
import { useLocation, useNavigate } from 'react-router-dom';

import './BackButton.scss';
import '../../styles/utils/text-styles.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.key === 'default') {
      navigate('/');

      return;
    }

    navigate(-1);
  };

  return (
    <button type="button" className="back-button small-text" onClick={goBack}>
      <i className="back-button__arrow-left" />
      Back
    </button>
  );
};
