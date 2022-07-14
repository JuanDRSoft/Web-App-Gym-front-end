import React from "react";
import Gimnasios from "../img/gimnasios.png";

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

const SolucionGimnasios = () => {
  return (
    <div className="mt-10">
      <p className="text-center font-bold text-4xl">¿Como lo haremos?</p>

      <div className="md:flex mt-14 gap-5 items-center">
        <div className="flex-1">
          <img src={Gimnasios} />
        </div>

        <div className="flex-1 px-5">
          <p className="font-bold text-6xl text-orange-500 text-center">
            Gimnasios
          </p>

          <p className="flex gap-1 text-justify mt-5">
            {check} Rutinas y ejercicios 100% personalizables, con EasyTraining
            podras crear rutinas completas: series,repeticiones,descripcion,etc.
            Podras ofrecer a tus clientes ejercicios totalmente personalizados.
          </p>

          <p className="flex gap-1 text-justify mt-5">
            {check} Ahórrate tiempo, ofrece la mejor experiencia y haz más
            felices a tus clientes ofreciéndoles la máxima calidad para que se
            queden contigo, ¡tenemos lo que necesitas!
          </p>

          <p className="flex gap-1 text-justify mt-5">
            {check} Gestiona tus propios eventos, manten a tus clientes
            enterados de todo lo que pasa en tu gimnasio, gestionar tus
            actividades sera muy sencillo y rapido, Define horarios, ubicación y
            entrenador.
          </p>

          <p className="flex gap-1 text-justify mt-5">
            {check} Con EasyTraining podras tener tu propia app mobile
            personalizada, la cual le facilitara los entrenamientos a tus
            clientes sus entrenamientos, y ademas medir su propia evolución.
          </p>

          <div className="flex justify-center mt-5 mb-5">
            <button className="uppercase p-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold rounded-md shadow-xl hover:to-orange-800">
              ver precios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolucionGimnasios;
