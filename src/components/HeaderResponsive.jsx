import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HeaderResponsive = () => {
  return (
    <div className="flex md:-z-10 z-10">
      <div className="md:absolute md:-z-10 top-16 w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center rounded-full bg-black bg-opacity-20 p-2 text-sm font-bold text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/soluciones"
                      className={`${
                        active
                          ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md p-2 text-xl font-semibold justify-start gap-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Soluciones
                    </Link>
                  )}
                </Menu.Item>
              </div>

              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/sistema"
                      className={`${
                        active
                          ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md p-2 text-xl font-semibold justify-start gap-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      Sistema
                    </Link>
                  )}
                </Menu.Item>
              </div>

              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/precios"
                      className={`${
                        active
                          ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md p-2 text-xl font-semibold justify-start gap-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Precios
                    </Link>
                  )}
                </Menu.Item>
              </div>

              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/soporte"
                      className={`${
                        active
                          ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md p-2 text-xl font-semibold justify-start gap-2`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Soporte
                    </Link>
                  )}
                </Menu.Item>
              </div>

              <div>
                <Menu.Item>
                  {({ active }) => (
                    <div className="p-3">
                      <Link
                        to="/prueba-gratuita"
                        className={`${
                          active
                            ? "bg-gradient-to-r from-orange-500 to-orange-800 text-black"
                            : "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                        } w-full items-center rounded-md p-2 text-lg font-bold justify-center uppercase shadow-xl`}
                      >
                        Prueba Gratuita
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderResponsive;
