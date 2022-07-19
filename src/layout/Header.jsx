import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HeaderResponsive from "../components/HeaderResponsive";
import Logo from "../img/logo.png";

const Header = () => {
  let location = useLocation();

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
            className={`${
              location.pathname === "/soluciones"
                ? "text-orange-500"
                : "hover:text-orange-500"
            } font-semibold mr-10 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible`}
          >
            Soluciones
          </Link>
          <Link
            to="/sistema"
            className={`${
              location.pathname === "/sistema"
                ? "text-orange-500"
                : "hover:text-orange-500"
            } font-semibold mr-10 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible`}
          >
            Sistema
          </Link>
          <Link
            to="/precios"
            className={`${
              location.pathname === "/precios" ||
              location.pathname === "/precios-de-gimnasios" ||
              location.pathname === "/precios-de-entrenadores"
                ? "text-orange-500"
                : "hover:text-orange-500"
            } font-semibold mr-10 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible`}
          >
            Precios
          </Link>
          <Link
            to="/soporte"
            className={`${
              location.pathname === "/soporte"
                ? "text-orange-500"
                : "hover:text-orange-500"
            } font-semibold mr-10 cursor-pointer text-lg md:z-0 -z-10 absolute md:relative md:visible invisible`}
          >
            Soporte
          </Link>
          <Link
            to="/prueba-gratuita"
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
