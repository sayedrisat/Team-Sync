import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, icon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex gap-3 pl-4 py-2 ${
          isActive
            ? "border-r-4 border-[var(--bg-primary)] bg-[var(--secondary)]"
            : ""
        }`
      }
      to={path}
      end="/"
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default NavigationTab;
