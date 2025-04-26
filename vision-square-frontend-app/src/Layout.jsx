import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // ✅ Add your Navbar import
import Footer from "./components/layout/Footer"; // ✅ Add your Footer import
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify styles

export default function Layout() {
  return (
    <div className="bg-background text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background shadow-sm">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>

      {/* ToastContainer for global toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
