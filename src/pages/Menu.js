import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu  = () => (
    <div id="menu">
        <div className="pure-menu">
            <NavLink to="/" className="pure-menu-heading">Budget</NavLink>

            <ul className="pure-menu-list">
                <NavLink to="/" 
                         className="pure-menu-item pure-menu-link" 
                         activeClassName="pure-menu-selected" 
                         exact={true}
                >Home</NavLink>
                <NavLink to="/categories" 
                    className="pure-menu-item pure-menu-link" 
                    activeClassName="pure-menu-selected" 
                    exact={true}
                >Categoria</NavLink>
                <NavLink to="/expenses" 
                    className="pure-menu-item pure-menu-link" 
                    activeClassName="pure-menu-selected" 
                    exact={true}
                >Despesas</NavLink>
            </ul>
        </div>
    </div>
)

export default Menu;