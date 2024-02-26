import { useEffect } from 'react';
import Aos from 'aos';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/blocks/container.scss';

export const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app-wrapper">
      <Header />

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
