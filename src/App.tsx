import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Outlet />

        <Footer />
      </div>
    </>
  );
};
