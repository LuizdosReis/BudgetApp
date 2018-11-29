import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from './styles';

export const MenuPage = () => (
  <Menu>
    <div className="pure-menu">
      <NavLink to="/" className="pure-menu-heading">
        Home
      </NavLink>
      <ul className="pure-menu-list">
        <NavLink
          to="/categories"
          className="pure-menu-item pure-menu-link"
          activeClassName="pure-menu-selected"
          exact
        >
          Categoria
        </NavLink>
        <NavLink
          to="/expenses"
          className="pure-menu-item pure-menu-link"
          activeClassName="pure-menu-selected"
          exact
        >
          Despesas
        </NavLink>
      </ul>
    </div>
  </Menu>
);

export default MenuPage;
