import { Link, Outlet } from 'react-router-dom';
import './style.css';

export const MainContainer = () => {
  return (
    <>
      <div className="picture-container">
        <div className="dinosaur">
          <img src="/img/1.png" className="dino" alt="Dino"></img>
        </div>
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
        </div>
      </div>
    </>
  );
};
