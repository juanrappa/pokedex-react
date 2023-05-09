import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">autor</h4>
              <p className="text-gray-500">
                <strong>phone:</strong>099455130<br></br>
                <strong>Email:</strong>juanrappa0@gmail.com
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">usefull links</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i className="fa fa-chevron-right"></i>
                  <a
                    href="https://github.com/juanrappa/pokedex-react"
                    className="hover:text-yellow-500"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right"></i>
                  <a
                    href="https://github.com/juanrappa/pokedex-react"
                    className="hover:text-yellow-500"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
