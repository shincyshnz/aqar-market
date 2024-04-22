"use client";
import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    React.Children.toArray(children)[0]?.props?.label
  );

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="flex justify-center  gap-4 md:gap-8 md:p-3 mb-4 text-xs lg:text-[16px]">
        {React.Children.map(children, (child) => (
          <button
            key={child.props?.label}
            className={`${
              activeTab === child.props.label
                ? "btn text-white bg-secondary-blue"
                : "btn bg-white"
            } flex-1 py-2 px-8 max-w-max`}
            onClick={(e) => handleClick(e, child.props?.label)}
          >
            {child.props?.label}
          </button>
        ))}
      </div>

      
        {React.Children.map(children, (child) => {
          if (child.props.label === activeTab) {
            return (
              <div key={child.props.label} className={""}>
                {child.props.children}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };
