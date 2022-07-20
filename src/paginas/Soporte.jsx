import React from "react";
import FormularioContacto from "../components/FormularioContacto";
import Logo from "../img/logo.png";
import Instagram from "../img/instagram.png";
import Email from "../img/email.png";
import Whastapp from "../img/whatsapp (1).png";
import TikTok from "../img/tik-tok.png";

const Soporte = () => {
  return (
    <div className="mt-10 md:flex justify-center md:gap-10">
      <div className="p-2 md:p-0">
        <FormularioContacto />
      </div>

      <div className="p-10 md:mt-10 md:p-0">
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
  );
};

export default Soporte;
