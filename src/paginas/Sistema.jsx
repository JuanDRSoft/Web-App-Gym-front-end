import React from "react";
import Administrador from "../img/admin.png";
import App from "../img/app.png";

const Sistema = () => {
  return (
    <div>
      <div className="mt-16">
        <p className="text-center font-semibold text-orange-500 text-xl uppercase">
          La tecnologia lograra cosas increibles en tu negocio fitness
        </p>

        <p className="font-bold text-center text-3xl md:text-5xl mt-6 md:px-44">
          Optimiza tus recursos, mejora tu eficiencia y ofrece el mejor servicio
          a tus clientes
        </p>
      </div>

      <div className="bg-gray-100 mt-20">
        <p className="text-center text-orange-500 font-bold text-4xl pt-20 pb-10">
          Software de EasyTraining
        </p>

        <div className="md:flex gap-10 2xl:px-44 pb-20 m-10 items-center">
          <div className="flex-1">
            <img src={Administrador} />
          </div>

          <div className="flex-1 mt-5 md:mt-0">
            <p className="font-bold text-3xl">Administrador</p>

            <p className="text-xl mt-5 text-justify md:mr-20">
              El administrador es la cabeza de EasyTraining. Desde alli es donde
              tu podras gestionar totalmente tu negocio fitness de una manera
              muy facil y sencilla. Manten todo bajo control e informado.
            </p>

            <p className="text-xl mt-5 text-justify md:mr-20">
              Registra usuarios, lleva el control de tus usuarios, controla su
              plan mensual, controla su proceso, asignales sus rutinas y
              personalizalas. Promociona tus eventos y productos con tus
              clientes, todo desde un mismo lugar facil y sencillo.
            </p>
          </div>
        </div>

        <div className="md:flex m-10 gap-10 2xl:px-44 pb-10 md:pb-0">
          <div className="flex-1">
            <img src={App} />
          </div>

          <div className="flex-1">
            <p className="font-bold text-3xl">App Mobile</p>

            <p className="text-xl mt-5 text-justify md:mr-20">
              Con EasyTraining podras contar con una app mobile totalmente
              personalizada con tus logos, nombres, etc. Una app con todo lo que
              necesitan tus clientes para facilitarles todos sus entrenamientos.
            </p>

            <p className="text-xl mt-5 text-justify md:mr-20 ">
              Tus clientes podran encontrar sus rutinas asignadas y llevar el
              control de estas, facilitale la vida a tus clientes y logra que no
              te quieran cambiar por otro, ofrecele lo mejor a tus clientes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20">
        <p className="text-orange-500 font-bold text-5xl md:flex gap-1 px-10">
          Conoce mas sobre EasyTraining <p className="text-black">...</p>
        </p>
        <div className="flex justify-center mt-10 p-5">
          <iframe
            src="https://www.youtube.com/embed/42H7d-Ba3ak"
            title="EASYTRAINING"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full md:h-screen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Sistema;
