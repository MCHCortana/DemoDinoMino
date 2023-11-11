import './style.css';
import { Link } from 'react-router-dom';
export const TynaPage = () => {
  return (
    <div className="container">
      <div className="me">
        <h2>Týna</h2>
        <img
          src="/img/Tyna.png"
          className="paw-green"
          alt="Step-green"
        ></img>{' '}
      </div>

      <div className="me-info">
        <h3>Tady</h3>
        <p>Text</p>
      </div>
    </div>
  );
};
