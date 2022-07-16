import React from "react";

const modelosNegocio = ["Gimnasio", "Entrenador Personal", "Otro"];

const FormularioContacto = () => {
  return (
    <div className="container mx-auto border-2 border-orange-500 mb-10 p-10 md:px-16 shadow-xl">
      <p className="font-bold flex justify-center text-4xl">Contactanos</p>

      <p className="font-semibold flex mt-5 justify-center">
        Ingresa tus datos de contacto y un asesor se pondra en contacto contigo
      </p>

      <form className="mt-10">
        <div>
          <label className="text-lg ">Nombre:</label>
          <input
            type="text"
            className="border-2 w-full p-3 mt-2"
            placeholder="Nombre completo"
          />
        </div>

        <div className="mt-5">
          <label className="text-lg">Email:</label>
          <input
            type="email"
            className="border-2 w-full p-3 mt-2"
            placeholder="example@example.com"
          />
        </div>

        <div className="mt-5">
          <label className="text-lg">Tipo de empresa:</label>
          <select className="border-2 w-full p-3 mt-2">
            <option>Selecciona una opción</option>
            {modelosNegocio.map((modelo) => (
              <option>{modelo}</option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <label className="text-lg">Nombre de empresa:</label>
          <input
            type="text"
            className="border-2 w-full p-3 mt-2"
            placeholder="Empresa"
          />
        </div>

        <div className="mt-5">
          <label className="text-lg">Número de clientes:</label>
          <input
            type="number"
            className="border-2 w-full p-3 mt-2"
            placeholder="Aprox"
          />
        </div>

        <div className="mt-5">
          <label className="text-lg">Teléfono Whatsapp:</label>
          <input
            type="text"
            className="border-2 w-full p-3 mt-2"
            placeholder="+57"
          />
        </div>

        <input
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-700 mt-10 w-full text-center font-bold uppercase text-white p-2 rounded-md shadow-xl text-xl"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default FormularioContacto;
