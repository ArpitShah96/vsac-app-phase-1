import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center hover:opacity-90 transition-opacity group"
  >
    <img
      src={logo}
      alt="Company Logo"
      className="h-16 w-auto object-contain"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/160x60?text=Logo";
      }}
    />
    <div className="ml-3 flex flex-col">
      <span className="text-xl font-bold text-blue-900 leading-tight">
        VISION SQUARE
      </span>
      <span className="text-base font-bold text-red-700 leading-tight mt-1">
        Abroad Consultancy
      </span>
    </div>
  </Link>
);

export default Logo;
