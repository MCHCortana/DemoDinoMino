import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export const App = () => {
  return (
    <>
      <div className="loaded-page">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
