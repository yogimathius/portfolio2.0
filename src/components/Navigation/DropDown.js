import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        aria-label="Menu"
        className="p-2 text-dark dark:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50">
          <Link
            to="/"
            className={`block px-4 py-2 text-sm ${
              isActive("/")
                ? "text-primary"
                : "text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`block px-4 py-2 text-sm ${
              isActive("/portfolio")
                ? "text-primary"
                : "text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-2 text-sm ${
              isActive("/contact")
                ? "text-primary"
                : "text-gray-dark dark:text-gray-light hover:text-primary dark:hover:text-primary"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
