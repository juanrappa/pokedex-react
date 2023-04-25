import React from "react";

export const Pagination = (props) => {
  const next = props.next;
  const previus = props.previus;

  return (
    <div>
      <button onClick={previus}>previus</button>
      <button onClick={next}>next</button>
    </div>
  );
};
