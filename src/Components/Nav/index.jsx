//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Instruments
import './style.css';

const Nav = ({ nav }) => {
  return (
    <ul className="menu">
      {nav.map(item => (
        <li className="menu__items" key={item.name}>
          <NavLink exact to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
