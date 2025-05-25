import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "/services" },
    { name: "Pages", path: "#pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/website_logo_1.webp" alt="OmniVus Logo" className="w-32 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 hover:text-blue-600 ${
                  location.pathname === item.path ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
                {item.name !== "Home" && item.name !== "Services" && item.name !== "Blog" && (
                  <span className="ml-1 text-xs">+</span>
                )}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side icons and button */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors duration-300">
              Free Consulting →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU" })}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => dispatch({ type: "CLOSE_MOBILE_MENU" })}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded font-medium">
              Free Consulting
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
