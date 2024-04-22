'use client';
import { Fragment, useState } from 'react';

const Dropdown = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.updateFilterData({[props.name] : option});
    setIsOpen(false);
  };

  return (
    <Fragment>
      <button
        id="dropdownDelayButton"
        className="2xl:min-h-[52px] border-[1px] border-drop-down-gray focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        <div className="w-full justify-between flex items-center">
          <div className="flex text-base gap-1">
            {props.icon && props.icon}
            {props.buttonText}
          </div>
          <svg className="w-2.5 h-2.5 ms-3 justify-self-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="#ADA7A7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownDelay"
          className="w-full z-10 divide-y divide-gray-100 rounded-lg shadow"
        >
          <ul className="py-2 text-sm" aria-labelledby="dropdownDelayButton">
            {props.options.map((item,index)=>(
              <li key={index}>
              <button
                className="capitalize block px-4 py-2 hover:bg-secondary-blue hover:text-white w-full text-left"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </button>
            </li>
            ))}
          </ul>
        </div>
      )}

      {selectedOption && (
        <p className="mt-2 text-sm text-gray-500">{selectedOption}</p>
      )}
    </Fragment>
  );
};

export default Dropdown;
