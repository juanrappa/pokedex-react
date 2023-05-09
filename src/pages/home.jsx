import React from "react";
import logo from "../assets/img1.jpg";
import logoGithub from "../assets/github.png";
import "../index.css";

export const Home = () => {
  return (
    <section className="bg-white ">
      <div className="grid max-w-screen-xl px-4 pt-20 items-start pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto justify-start place-self-center  lg:col-span-7">
          <div className="font-extrabold mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl">
            bienvenido a la <p className="text-red-600">pokedex</p>
          </div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            esta es una galeria de pokemons con sus respetivas habilidades y
            caracteristicas
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <button
              id="enviaragithub"
              data-cy="redirectingToGithub"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
            >
              <img
                src={logoGithub}
                className="w-4 h-4 mr-2 text-gray-500"
                alt=""
              />
              ver en github
            </button>
          </div>
        </div>
        <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};
