import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderResponsive from "../components/HeaderResponsive";
import Logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-xl">
        <nav className={`md:p-6 md:flex md:items-center md:justify-center`}>
          <div className="md:mr-24 flex p-3 justify-between items-center">
            <Link to="/" className="md:w-72 w-56">
              <img src={Logo} width={300} />
            </Link>

            <HeaderResponsive />
          </div>

          <Link
            to="/soluciones"
            className="font-semibold mr-10 hover:text-orange-500 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible"
          >
            Soluciones
          </Link>
          <Link
            to="/sistema"
            className="font-semibold mr-10 hover:text-orange-500 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible"
          >
            Sistema
          </Link>
          <Link
            to="/precios"
            className="font-semibold mr-10 hover:text-orange-500 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible"
          >
            Precios
          </Link>
          <Link
            to="/soporte"
            className="font-semibold mr-10 hover:text-orange-500 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible"
          >
            Soporte
          </Link>
          <Link
            to="/"
            className="md:font-bold md:uppercase md:bg-gradient-to-r from-orange-500 to-orange-700 md:text-white md:p-3 md:rounded-md md:shadow-md md:hover:to-orange-600 md:z-0 md:relative -z-10 absolute md:visible invisible"
          >
            Prueba gratuita
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
