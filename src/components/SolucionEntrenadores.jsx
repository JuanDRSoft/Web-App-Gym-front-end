import React from "react";
import Entrenadores from "../img/entrenadores.png";

const check = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-14 text-orange-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>,
];

const SolucionEntrenadores = () => {
  return (
    <div className="flex mt-10 bg-gray-100 items-center">
      <div className="flex-1 px-5 pt-5">
        <p className="font-bold text-6xl text-orange-500 text-center">
          Entrenadores
        </p>

        <p className="flex gap-1 text-justify mt-5">
          Deja de gastar tanto tiempo monitoreando tus clientes, ahorrate tiempo
          y trabajo. Automatiza la manera en como gestionas tus clientes y veras
          como llevas tus entrenamientos personalizados al siguiente nivel.
        </p>

        <p className="flex gap-1 text-justify mt-7">
          {check} Crea rutinas totalmente personalizadas y automatizadas.
        </p>

        <p className="flex gap-1 text-justify mt-5">
          {check} Crea tu propio catalogo de productos.
        </p>

        <p className="flex gap-1 text-justify mt-5">
          {check} App mobile totalmente personalizada
        </p>

        <p className="flex gap-1 text-justify mt-5">
          {check} Ofrece a tus clientes un seguimiento personalizado y control
          de peso.
        </p>

        <p className="flex gap-1 text-justify mt-5">
          {check} Fortalece tu marca, diferenciate del resto de entrenadores
          ofreciendoles toda una experiencia.
        </p>

        <div className="flex justify-center">
          <button className="mt-5 bg-gradient-to-r from-orange-500 to-orange-700 font-bold uppercase p-2 text-white rounded-md shadow-xl hover:to-orange-800">
            ver precios
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img src={Entrenadores} width={600} />
      </div>
    </div>
  );
};

export default SolucionEntrenadores;
