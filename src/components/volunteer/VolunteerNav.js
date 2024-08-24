import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md font-inter">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/ZubinFoundationLogo.png"
            alt="Zubin Logo"
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] object-contain"
          />
          <span className="ml-2 sm:ml-4 text-lg sm:text-xl font-bold">
            The Zubin Foundation
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700">
          <a href="#" className="hover:text-red-500">
            My Calendar
          </a>
          <a href="#" className="hover:text-red-500">
            Events
          </a>
          <a href="#" className="hover:text-red-500">
            Appointments
          </a>
          <a href="#" className="hover:text-red-500">
            Contacts
          </a>
        </div>

        {/* User Icon */}
        <div>
          <FaUserCircle className="text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden flex flex-col items-center space-y-2 mt-2 text-gray-700">
        <a href="#" className="hover:text-red-500">
          My Calendar
        </a>
        <a href="#" className="hover:text-red-500">
          Events
        </a>
        <a href="#" className="hover:text-red-500">
          Trainings
        </a>
        <a href="#" className="hover:text-red-500">
          Contacts
        </a>
      </div>
    </nav>
  );
}
