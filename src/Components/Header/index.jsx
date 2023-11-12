import { Link } from 'react-router-dom';
import { useState, useWin } from 'react';
// import { useWindowSize } from '@uidotdev/usehooks';
import './style.css';

export const Header = () => {
  const size = useWindowSize();
  const [menuOn, setMenuOn] = useState(false);
  const menuItems = [
    { path: '/', name: 'Domů' },
    { path: '/TanaPage', name: 'Táňa' },
    { path: '/TynaPage', name: 'Týna' },
  ];
  const openingMenu = () => {
    setMenuOn(!menuOn);
  };
  console.log(window.innerWidth);
  const showDino =
    window.location.width <= 820 || window.location.height <= 700
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
              <div key={item.name} className="menu-item">
                <Link to={item.path}>
                  {' '}
                  <h2>{item.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
        <button onClick={openingMenu} className="menu__btn"></button>
      </div>
    </header>
  );
};
