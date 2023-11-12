import { Link } from 'react-router-dom';
import './style.css';

export const MenuItem = ({ text, onSelect, path }) => {
  const handleClick = () => {
    onSelect(text);
  };

  return (
    <div onClick={handleClick} className="menu-item">
      <Link to={path}>
        {' '}
        <h2>{text}</h2>
      </Link>
    </div>
  );
};
