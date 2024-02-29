/* eslint-disable jsx-a11y/control-has-associated-label */
import { useLocation, useNavigate } from 'react-router-dom';

import './BackButton.scss';
import '../../styles/utils/text-styles.scss';
import cn from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  const goBack = () => {
    if (location.key === 'default') {
      navigate('/');

      return;
    }

    navigate(-1);
  };

  return (
    <button
      type="button"
      className={cn('back-button small-text', {
        'back-button--dark': isDark,
      })}
      onClick={goBack}
    >
      <i
        className={cn('back-button__arrow-left', {
          'back-button__arrow-left--dark': isDark,
        })}
      />
      Back
    </button>
  );
};
