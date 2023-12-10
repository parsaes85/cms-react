import React from "react";

export default function Input(props) {
  return (
    <>
      <input
        {...props.register}
        type={props.type}
        id={props.id}
        className="block w-full py-1 border-b rounded bg-transparent text-gray-800 border-gray-700 focus:outline-none"
      />
      {props.validations}
    </>
  );
}
