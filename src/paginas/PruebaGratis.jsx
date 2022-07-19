import React from "react";
import FormularioContacto from "../components/FormularioContacto";
import Prueba from "../img/prueba-gratis.png";

const PruebaGratis = () => {
  return (
    <div className="md:flex md:px-20 2xl:px-60 md:pt-20 p-5 gap-10">
      <div className="flex-1 mb-10">
        <p className="text-5xl font-bold">
          Empieza a apostar por la tecnologia en tu negocio ahora mismo
        </p>

        <p className="text-xl mt-5">
          Prueba gratis EasyTraining. No necesitas una tarjeta de credito, solo
          necesitas llevar tu negocio al siguiente nivel y para eso estamos
          aquí.
        </p>

        <div className="flex justify-center mt-10">
          <img src={Prueba} width={300} />
        </div>
      </div>

      <div className="flex-1">
        <FormularioContacto />
      </div>
    </div>
  );
};

export default PruebaGratis;
