import React from "react";
import "../index.css";
export const Pagination = (props) => {
  const next = props.next;
  const previus = props.previus;

  return (
    <div className="flex w-full items-center content-center justify-center mt-2">
      <div className="flex ">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={previus}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};
