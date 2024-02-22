import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { actions as productsActions } from './features/productsSlice';

import './styles/blocks/container.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Loader } from './components/Loader';

export const App = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="app-wrapper">
      {isLoading
        ? <Loader />
        : (
          <>
            <Header />

            <div className="container">
              <Outlet />
            </div>

            <Footer />
          </>
        )}
    </div>
  );
};
