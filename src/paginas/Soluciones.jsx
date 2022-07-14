import React from "react";
import SolucionGimnasios from "../components/SolucionGimnasios";
import Banner from "../img/soluciones.jpg";

const Soluciones = () => {
  return (
    <div>
      <div className="absolute text-center md:py-44  md:px-80 p-6">
        <p className="font-bold md:text-4xl text-xl text-white">
          ¿Quieres llevar tu negocio fitness al siguiente nivel?
        </p>
        <p className="text-white md:text-xl text-sm mt-5">
          Sigue leyendo que has llegado al lugar que necesitas, te explicaremos
          como EasyTraining te facilitara la administración de tu negocio
          fitness.
        </p>

        <button className="bg-gradient-to-r from-orange-500 to-orange-700 p-3 mt-7 text-white font-bold uppercase rounded-md">
          Prueba gratis
        </button>
      </div>

      <img src={Banner} className="md:w-full  h-64 md:h-auto -z-10" />

      <SolucionGimnasios />
    </div>
  );
};

export default Soluciones;
