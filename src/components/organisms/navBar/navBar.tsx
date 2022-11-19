import React from 'react';
import laptopBitmoji from '../../../assets/laptopBitmoji.png';
import { navItems } from '../constants.ts';
import styles from './navBar.module.scss';

interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  const {
    NavBar__Container,
    NavBar__Header,
    NavBar__Header__Home,
    NavBar__Header__Name,NavBar__Header__Title,

    NavBar__Item,
  } = styles;

  return (
    <div className={NavBar__Container}>
      <div className={NavBar__Header}>
        <img src={laptopBitmoji} className={NavBar__Header__Home} />
        <span className={NavBar__Header__Name}>Meli</span>
        <span className={NavBar__Header__Title}>Software Engineer</span>

      </div>
      {navItems.map((item) => (
        <div className={NavBar__Item}>{item.name}</div>
      ))}
    </div>
  );
};

export default NavBar;
