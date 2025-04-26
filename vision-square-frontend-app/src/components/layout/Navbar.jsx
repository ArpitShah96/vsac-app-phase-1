import { useState } from "react";
import { ROUTES } from "../../routes/routerConfig";
import NavItem from "../ui/NavItem";
import MobileMenu from "./MobileMenu";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const visibleRoutes = Object.values(ROUTES).filter(
    (route) => route.isNavVisible
  );

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Added border-b for subtle separation */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-gray-100">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {visibleRoutes.map((route) => (
            <NavItem key={route.path} to={route.path}>
              {route.title}
            </NavItem>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <MobileMenu
        routes={visibleRoutes}
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
