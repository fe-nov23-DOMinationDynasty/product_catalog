import { useEffect } from 'react';
import Aos from 'aos';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/blocks/container.scss';
import { useAppDispatch } from './app/hooks';
import { actions as productsActions } from './features/productsSlice';


export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Aos.init();
    dispatch(productsActions.loadProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
