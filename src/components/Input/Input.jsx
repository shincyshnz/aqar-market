"use client";

import React from "react";
const Input = ({ ...props }) => {
  return (
    <div className="rounded-[6px] bg-white flex items-center gap-2">
      {props.icons && <label htmlFor="email" className="pl-6">
        {props.icons}
      </label>}
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        className={`${props.inputClass}`}
        onChange={props.onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
