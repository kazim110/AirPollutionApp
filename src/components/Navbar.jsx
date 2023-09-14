import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FaRegSun } from 'react-icons/fa';

const Navbar = () => (
  <>
    <nav>
      <div className="d-flex justify-content-between p-3">
        <div className="d-flex  align-items-center">
          <BsChevronLeft className="backBttn" />
          <NavLink to="/" className="text-decoration-none text-dark">Back</NavLink>
        </div>
        <NavLink to="/" className="text-decoration-none text-dark">Europe</NavLink>
        <div className="d-flex  align-items-center">
          <BiSolidMicrophone className="" />
          <FaRegSun className="" />
        </div>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
