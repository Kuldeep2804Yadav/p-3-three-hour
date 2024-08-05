import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} bg-blue-800 h-8 w-auto text-white px-4 rounded items-center`}
    >
      {props.title}
    </button>
  );
};

export default Button;
