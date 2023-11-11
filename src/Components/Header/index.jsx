import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

export const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  const openingMenu = () => {
    setMenuOn(!menuOn);
  };
  console.log(window.innerWidth);
  const showDino =
    window.innerWidth <= 820 || window.innerHeight <= 700
      ? 'dino-header--hide'
      : 'dino-header';
  console.log(showDino);
  return (
    <header className="header">
      <div>
        <img src="/img/1.png" className={showDino} alt="DinoLogo" />
      </div>
      <button onClick={openingMenu} className="menu__btn"></button>
      <div className={menuOn ? 'menu' : 'menu--closed'}>
        <div className="menu-item">
          <Link to="/">
            {' '}
            <h2>Domů </h2>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/TanaPage">
            <h2>Táňa</h2>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/TynaPage">
            <h2>Týna</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};
