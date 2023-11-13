import { Link } from 'react-router-dom';
import './style.css';

export const MenuItem = ({ text, path }) => {
  return (
    <div className="menu-item">
      <Link to={path}>
        {' '}
        <h2>{text}</h2>
      </Link>
    </div>
  );
};
