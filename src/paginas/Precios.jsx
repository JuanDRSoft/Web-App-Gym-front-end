import React from "react";
import Gimnasios from "../img/gimnasios.png";
import Entrenadores from "../img/entrenadores.png";
import { Link } from "react-router-dom";

const Precios = () => {
  return (
    <div className="md:flex md:p-10 p-5 gap-4">
      <div className="shadow-xl rounded-md border flex-1 hover:border-orange-500 hover:shadow-2xl duration-300 hover:bg-gray-50">
        <p className="text-orange-500 font-bold text-center text-5xl md:pt-20 pt-10">
          Gimnasios
        </p>

        <p className="text-center mt-5 md:px-24 px-10 font-semibold">
          Para nadie es un secreto que gestionar un gimnasio no es nada facil,
          pero no te preocupes EasyTraining te lo soluciona.
        </p>

        <img src={Gimnasios} className="md:px-20 mt-5" />

        <div className="flex justify-center mt-10 mb-10">
          <Link
            to="/precios-de-gimnasios"
            className="bg-gradient-to-r from-orange-500 to-orange-700 hover:to-orange-800 rounded-md shadow-xl p-2 text-white font-bold uppercase"
          >
            Ver precios
          </Link>
        </div>
      </div>

      <div className="shadow-xl rounded-md border flex-1 mt-10 md:mt-0 hover:border-orange-500 hover:shadow-2xl duration-300 hover:bg-gray-50">
        <p className="font-bold text-center md:pt-20 pt-10 text-orange-500 text-5xl">
          Entrenadores
        </p>

        <p className="text-center mt-5 md:px-24 px-10 font-semibold">
          Te la pasas 24/7 gestionando tu negocio. Con EasyTraining, gana
          calidad de vida, potencia tu negocio y llevalo al siguiente nivel.
        </p>

        <img src={Entrenadores} className="mt-5 md:px-36 2xl:px-48" />

        <div className="flex justify-center mt-6 mb-10">
          <Link
            to="/precios-de-entrenadores"
            className="bg-gradient-to-r from-orange-500 to-orange-700 hover:to-orange-800 rounded-md shadow-xl p-2 text-white font-bold uppercase"
          >
            Ver precios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Precios;
