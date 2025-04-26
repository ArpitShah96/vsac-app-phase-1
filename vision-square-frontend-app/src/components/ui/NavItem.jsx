import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 text-lg font-medium transition-colors ${
        isActive
          ? "text-blue-800 border-b-2 border-blue-800"
          : "text-gray-600 hover:text-blue-700"
      }`
    }
  >
    {children}
  </NavLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
