import { Link } from 'react-router-dom';
import { useState, useWin } from 'react';
// import { useWindowSize } from '@uidotdev/usehooks';
import './style.css';
import { MenuItem } from '../MenuItem';

export const Header = () => {
  // const size = useWindowSize();
  const [menuOn, setMenuOn] = useState(false);
  const menuItems = [
    { path: '/', name: 'Domů' },
    { path: '/TanaPage', name: 'Táňa' },
    { path: '/TynaPage', name: 'Týna' },
  ];
  const openingMenu = () => {
    setMenuOn(!menuOn);
  };

  const showDino =
    window.innerWidth <= 820 || window.innerHeight <= 700
      ? 'dino-header--hide'
      : 'dino-header';
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src="/img/1.png" className={showDino} alt="DinoLogo" />
        </Link>
      </div>
      <div className="menu-items">
        <div className={menuOn ? 'menu' : 'menu--closed'}>
          {menuItems.map((item) => {
            return (
              <MenuItem key={item.name} text={item.name} path={item.path} />
            );
          })}
        </div>
        <button onClick={openingMenu} className="menu__btn"></button>
      </div>
    </header>
  );
};
