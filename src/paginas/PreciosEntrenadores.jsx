import React from "react";
import { Link } from "react-router-dom";

const yes = [
  <div className="flex justify-center text-orange-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>,
];

const Not = [
  <div className="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>,
];

const PreciosEntrenadores = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <p className="font-semibold uppercase text-orange-500 text-4xl text-center">
          Easytraining para entrenadores
        </p>

        <p className="text-xl mt-5 text-center">
          Escoge el plan que satisface todas tus necesidades como entrenador,
          libra tiempo e inviertelo mejor
        </p>
      </div>

      <div className="flex justify-center text-center px-40 2xl:px-80 mb-20">
        <div className="flex-1 py-5">
          <p className="uppercase font-semibold text-xl text-orange-500">
            Caracteristicas
          </p>

          <div className="mt-5 text-lg text-start">
            <p className="border-b py-2">Usuarios registrados</p>
            <p className="border-b py-2">
              Usuarios administradores registrados
            </p>
            <p className="border-b py-2">App totalmente personalizada</p>
            <p className="border-b py-2">
              App mobile para clientes totalmente personalizada
            </p>
            <p className="border-b py-2">Editor de entreno personalizado</p>
            <p className="border-b py-2">Nutrición</p>
            <p className="border-b py-2">Gestor de contenidos audiovisuales</p>
            <p className="border-b py-2">Catalogo de productos para clientes</p>
          </div>
        </div>

        <div className="py-5">
          <p className="uppercase font-semibold text-xl text-orange-500 mr-16 ml-16">
            Plan gratuito
          </p>

          <div className="mt-5 text-lg">
            <p className="border-b py-2">Hasta 10 usuarios</p>
            <p className="border-b py-2">Hasta 1 administrador</p>
            <p className="border-b py-2">{Not}</p>
            <p className="border-b py-2">{Not}</p>
            <p className="border-b py-2">{yes}</p>
            <p className="border-b py-2">{Not}</p>
            <p className="border-b py-2">{Not}</p>
            <p className="border-b py-2">{Not}</p>
            <p className="pt-2 uppercase font-semibold text-orange-500 text-2xl mb-5">
              Gratis
            </p>

            <Link
              to=""
              className="shadow-xl bg-gradient-to-r from-orange-500 to-orange-700 hover:to-orange-800 p-2 uppercase rounded-md text-white font-bold"
            >
              Lo quiero
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border shadow-2xl py-5">
          <p className="uppercase font-semibold text-xl text-orange-500 mr-16 ml-16">
            Plan Premium
          </p>

          <div className="mt-5 text-lg">
            <p className="py-2">Hasta 50</p>
            <p className="py-2">Hasta 5 administradores</p>
            <p className="py-2">{yes}</p>
            <p className="py-2">{yes}</p>
            <p className="py-2">{yes}</p>
            <p className="py-2">{yes}</p>
            <p className="py-2">{yes}</p>
            <p className="py-2">{yes}</p>
            <p className="pt-2 font-semibold text-orange-500 text-2xl mb-5">
              100.000 COP/ Mes
            </p>

            <a
              href="https://wa.link/0jxga7"
              target="_blank"
              className="shadow-xl bg-gradient-to-r from-orange-500 to-orange-700 hover:to-orange-800 p-2 uppercase rounded-md text-white font-bold"
            >
              Lo quiero
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreciosEntrenadores;
