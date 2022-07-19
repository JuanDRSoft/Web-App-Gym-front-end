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

const PreciosGimnasiosResponsive = () => {
  return (
    <div className="md:invisible visible absolute md:flex">
      <div className="mt-10 mb-10">
        <p className="font-semibold uppercase text-orange-500 text-3xl text-center">
          Easytraining en tu gimnasio
        </p>

        <p className="text-xl mt-5 text-center">
          Escoge el plan que satisface todas tus necesidades como gimnasio
        </p>
      </div>

      <div className="shadow-2xl ml-3 mr-3 border rounded-lg">
        <div className="flex bg-gradient-to-r from-orange-500 to-orange-700 rounded-t-lg p-3 items-center justify-between">
          <p className="text-white font-semibold uppercase text-xl ">
            Plan Gratuito
          </p>

          <p className="text-white uppercase font-semibold">Gratis</p>
        </div>

        <div className="p-5">
          <div className="flex items-center border-b pb-2">
            <p className="flex-1">Usuarios registrados</p>
            <p>Hasta 50 usuarios</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Usuarios administradores registrados</p>
            <p>Hasta 1 administrador</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">App totalmente personalizada</p>
            <p>{Not}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">
              App mobile para clientes totalmente personalizada
            </p>
            <p>{Not}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Editor de entreno personalizado</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Registro de entrenadores</p>
            <p>{Not}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Gestor de contenidos audiovisuales</p>
            <p>{Not}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Control de asistencias</p>
            <p>{Not}</p>
          </div>

          <div className="flex items-center mt-2 pb-2 mb-5">
            <p className="flex-1">Catalogo de productos para clientes</p>
            <p>{Not}</p>
          </div>

          <Link
            to=""
            className="uppercase flex justify-center bg-gradient-to-r from-orange-500 to-orange-700 p-2 text-white font-bold hover:to-orange-800 rounded-md shadow-xl"
          >
            Lo quiero
          </Link>
        </div>
      </div>

      {/* //plan premium */}

      <div className="shadow-2xl ml-3 mr-3 border rounded-lg mt-5">
        <div className="flex bg-gradient-to-r from-orange-500 to-orange-700 rounded-t-lg p-3 items-center justify-between">
          <div>
            <p className="text-white font-semibold uppercase text-xl">Plan</p>
            <p className="text-white font-semibold uppercase text-xl">
              Premium
            </p>
          </div>

          <div className="text-center">
            <p className="text-white uppercase font-semibold">
              1.000 COP / usuario
            </p>

            <p className="text-white font-semibold uppercase text-xs">
              Mensualmente
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center border-b pb-2">
            <p className="flex-1">Usuarios registrados</p>
            <p>Usuarios ilimitados</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Usuarios administradores registrados</p>
            <p>Hasta 10 administradores</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">App totalmente personalizada</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">
              App mobile para clientes totalmente personalizada
            </p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Editor de entreno personalizado</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Registro de entrenadores</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Gestor de contenidos audiovisuales</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 border-b pb-2">
            <p className="flex-1">Control de asistencias</p>
            <p>{yes}</p>
          </div>

          <div className="flex items-center mt-2 pb-2 mb-5">
            <p className="flex-1">Catalogo de productos para clientes</p>
            <p>{yes}</p>
          </div>

          <a
            href="https://wa.link/0jxga7"
            target="_blank"
            className="flex justify-center hover:to-orange-800 rounded-md shadow-xl bg-gradient-to-r from-orange-500 to-orange-700 p-2 text-white font-bold uppercase"
          >
            lo quiero
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreciosGimnasiosResponsive;
