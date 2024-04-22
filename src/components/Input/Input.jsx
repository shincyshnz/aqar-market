"use client";

import React from "react";
const Input = ({ ...props }) => {
  return (
    <div className="input bg-white flex items-center gap-2">
      <label htmlFor="email" className="">
        {props.icons}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        className={`${props.inputClass}`}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
