import './style.css';
import { Link } from 'react-router-dom';
export const TanaPage = () => {
  return (
    <div className="container">
      <Link to="/">
        <p>Tady dame obrazek šipka</p>
      </Link>
      <h2>Táňa</h2>
    </div>
  );
};
