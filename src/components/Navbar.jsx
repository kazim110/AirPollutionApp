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
          <BsChevronLeft className="backBtn mx-1" />
          <NavLink to="/" className="text-decoration-none"><strong className="display-6 fw-bold">Back</strong></NavLink>
        </div>
        <NavLink to="/" className="text-decoration-none"><strong className="display-6">Europe</strong></NavLink>
        <div className="d-flex  align-items-center">
          <BiSolidMicrophone className="micBtn mx-1" />
          <FaRegSun className="settingBtn mx-1" />
        </div>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
