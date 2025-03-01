import React from "react";
import { TabItem } from "./types";

interface NavigationTabsProps {
  tabs: TabItem[];
  onTabChange?: (index: number) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  tabs,
  onTabChange,
}) => {
  return (
    <nav className="flex mb-10 border-b border-solid border-b-gray-200 max-md:justify-center">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange && onTabChange(index)}
          className={`px-0 py-3 text-base text-center text-gray-600 cursor-pointer w-[202px] ${
            tab.isActive ? "border-b-2 border-teal-500 text-teal-500" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
