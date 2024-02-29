import { useEffect } from 'react';
import Aos from 'aos';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/blocks/container.scss';

import './styles/utils/dark-theme.scss';
import variables from './styles/utils/variables-export.module.scss';

import { useAppSelector } from './app/hooks';
import { Theme } from './enums/Theme';

export const App = () => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  useEffect(() => {
    Aos.init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const rootElement = document.querySelector(':root') as HTMLElement | null;

    if (rootElement) {
      rootElement.style.setProperty('--body-bg-color', isDark
        ? variables.bgColorDark
        : variables.bgwhiteColor);
    }
  }, [isDark]);

  return (
    <div className={cn('app-wrapper', { 'dark-theme': isDark })}>
      <Header />

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
