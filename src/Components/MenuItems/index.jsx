import { Link } from 'react-router-dom';
import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => {
    onSelect(text);
  };

  return (
    <a onClick={handleClick} href="#" className="menu-item">
      {text}
    </a>
  );};
//
//           <Link to="/">
//             {' '}
//             <h2>Domů </h2>
//           </Link>
//         </div>
//         <div className="menu-item">
//           <Link to="/TanaPage">
//             <h2>Táňa</h2>
//           </Link>
//         </div>
//         <div className="menu-item">
//           <Link to="/TynaPage">
//             <h2>Týna</h2>
//           </Link>
//         </div>
//       </div>
//     </header>
  );
};
