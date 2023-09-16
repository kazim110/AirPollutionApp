import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <div className="nav-center">
        <h4>Redux Pollutions</h4>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Pollutions</NavLink>
        </li>
        <li>
          <NavLink to="/pollutionsDetails">Pollution Details</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
