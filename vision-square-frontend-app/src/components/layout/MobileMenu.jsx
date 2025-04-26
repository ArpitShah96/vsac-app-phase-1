import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MobileMenu = ({ routes, isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white py-2 px-4 shadow-lg rounded-b-xl absolute w-full left-0 z-40">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          onClick={toggleMenu}
          className={({ isActive }) =>
            `block py-3 px-4 my-1 transition-colors ${
              isActive
                ? "text-blue-800 font-medium border-l-4 border-blue-800 pl-3"
                : "text-gray-600 hover:text-blue-700"
            }`
          }
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

MobileMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
