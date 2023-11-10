import './reset.css';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="dino-mino">
        <Link to="/">
          <div className="dinosaur">
            <h2>Hlavní</h2>
            <img src="/img/1.png" className="dino" alt="Dino"></img>
          </div>
        </Link>
        <div className="paws">
          <div className="paws-box">
            <Link to="/TanaPage">
              <h2>Táňa</h2>
              <img
                src="/img/Tana.png"
                className="paw-blue"
                alt="Step-purple"
              ></img>{' '}
            </Link>
          </div>

          <div className="paws-box">
            <Link to="/TynaPage">
              <h2>Týna</h2>
              <img
                src="/img/Tyna.png"
                className="paw-green"
                alt="Step-green"
              ></img>{' '}
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
