import { Link } from 'react-router-dom';
import './style.css';
export const ErrorPage = () => {
  return (
    <div className={'error-container'}>
      <h2 className="error">404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
      <Link className="back-domu" to="/">
        Zpět Domů
      </Link>
    </div>
  );
};
