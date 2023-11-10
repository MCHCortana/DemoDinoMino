import './style.css';
import { Link } from 'react-router-dom';
export const TynaPage = () => {
  return (
    <div className="container">
      <Link to="/">
        <p>Tady dame obrazek šipka</p>
      </Link>
      <h2>Týna</h2>
    </div>
  );
};
