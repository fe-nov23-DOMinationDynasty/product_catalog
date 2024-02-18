import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/blocks/container.scss';

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />

      <section className="container">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};
