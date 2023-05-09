import React from "react";
import "../index.css";
import styled from "styled-components";
import logo from "../assets/pokebola.png";
import { Link } from "react-router-dom";

export const HeaderPokedex = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-2 mx-auto">
          <div className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl whitespace-nowrap font-semibold">
              pokedex
            </span>
          </div>
          <div
            id="boton"
            data-cy="button-menu"
            className="flex items-center lg:order-2"
          >
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 hidden"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="border-gray-50">
                <Link
                  to="/pokedex-react/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded lg:bg-transparent lg:p-0 hover:text-blue-700 border-gray-200 hover:bg-gray-50"
                >
                  Home
                </Link>
              </li>
              <li className="border-gray-50">
                <Link
                  to="/pokedex-react/Galery"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded lg:bg-transparent lg:p-0 hover:text-blue-700 border-gray-200 hover:bg-gray-50"
                >
                  Galery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
