import React from "react";
import Contacto from "../img/whatsapp.png";
import ImagenInicio from "../img/inicio.png";
import Logo from "../img/logo.png";
import Instagram from "../img/instagram.png";
import Email from "../img/email.png";
import Whastapp from "../img/whatsapp (1).png";
import TikTok from "../img/tik-tok.png";
import Clientes from "../img/clientes.png";
import Capta from "../img/capta.png";
import Eficiencia from "../img/eficiencia.png";
import Ecosistema from "../img/ecosistema.png";
import FormularioContacto from "../components/FormularioContacto";

const Inicio = () => {
  return (
    <div className="md:mt-10 ">
      <div className="md:flex items-center">
        <div className="flex justify-center md:justify-end mt-10">
          <img src={ImagenInicio} className="md:pl-20 p-2 md:p-0" />
        </div>

        <div className="md:p-20 p-10">
          <p className="font-bold text-3xl md:text-5xl  md:text-left ">
            El software que gestiona tu negocio fitness como siempre quisiste
          </p>
          <p className="font-semibold mt-5 md:text-left text-xl md:text-2xl text-gray-400 ">
            Gana clientes, fideliza tus clientes y aumenta tu eficiencia
          </p>
          <div className="md:flex md:justify-start  mt-5 gap-5">
            <a className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-md p-2 px-4 text-white font-bold uppercase shadow-xl hover:to-orange-800">
              La quiero probar !
            </a>

            <a
              href="https://wa.link/jt4z0p"
              target="_blank"
              className="mt-5 md:mt-0 bg-black rounded-md p-2 px-4 text-white font-bold uppercase w-40 md:w-auto flex gap-2 shadow-xl hover:bg-gray-600 duration-200 items-center"
            >
              <img src={Contacto} className="w-6" />
              Contacto
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black mt-20">
        <div>
          <p className="font-semibold text-white text-2xl pt-10 md:pt-20 flex justify-center text-center">
            Lleva tu negocio fitness al siguente nivel
          </p>
          <p className="text-gray-400 font-semibold mt-5 flex justify-center text-center">
            Te brindamos todas las funciones que necesitas facilmente y en un
            solo lugar
          </p>
        </div>

        <div className="md:flex mt-16 md:mt-28 md:px-10 md:gap-20 items-center pb-28 justify-center">
          <div className="text-center mb-10 md:mb-0">
            <div className="flex justify-center">
              <img src={Clientes} width={80} />
            </div>
            <p className="font-semibold text-white text-2xl mt-7">Clientes</p>
            <p className="text-gray-400 font-semibold mt-4">
              Facilitale las rutinas a tus clientes y no te abandonaran nunca
            </p>
          </div>

          <div className="text-center mb-10 md:mb-0">
            <div className="flex justify-center">
              <img src={Capta} width={80} />
            </div>
            <p className="font-semibold text-white text-2xl mt-7">Capta</p>
            <p className="text-gray-400 font-semibold mt-4">
              Consigue mas clientes
            </p>
          </div>

          <div className="text-center mb-10 md:mb-0">
            <div className="flex justify-center">
              <img src={Eficiencia} width={80} />
            </div>
            <p className="font-semibold text-white text-2xl mt-7">Eficiencia</p>
            <p className="text-gray-400 font-semibold mt-4">
              Ahorra tiempo y lleva un mejor orden en tu negocio
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <img src={Ecosistema} width={80} />
            </div>
            <p className="font-semibold text-white text-2xl mt-7">Ecosistema</p>
            <p className="text-gray-400 font-semibold mt-4">
              Olvidate del papel y del lapiz, para cuidar nuestro planeta
            </p>
          </div>
        </div>
      </div>

      <div className="md:mt-20 mt-10 md:flex justify-center md:gap-10 items-center">
        <div className="p-2 md:p-0">
          <FormularioContacto />
        </div>

        <div className="p-10 md:p-0">
          <img src={Logo} className="w-96 md:w-full" />
          <div className="mt-16">
            <a
              href="https://wa.link/jt4z0p"
              target="_blank"
              className="flex items-center gap-5"
            >
              <img src={Whastapp} width={50} />
              <p className="font-semibold text-orange-500 text-xl hover:text-black duration-500">
                +57 305 2325207
              </p>
            </a>

            <a
              href="mailto:jthreeagency@gmail.com"
              className="mt-10 flex items-center gap-5"
            >
              <img src={Email} width={50} />
              <p className="font-semibold text-orange-500 text-xl hover:text-black duration-500">
                jthreeagency@gmail.com
              </p>
            </a>

            <a
              href="https://www.instagram.com/_easytraining_/"
              target="_blank"
              className="mt-10 flex items-center gap-5"
            >
              <img src={Instagram} width={50} />
              <p className="font-semibold text-orange-500 text-xl hover:text-black duration-500">
                @_easytraining_
              </p>
            </a>

            <a
              href="https://www.tiktok.com/@easytraining?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="mt-10 flex items-center gap-5 "
            >
              <img src={TikTok} width={50} />
              <p className="font-semibold text-orange-500 text-xl hover:text-black duration-500">
                @easytraining
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
