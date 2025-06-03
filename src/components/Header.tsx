
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleCategoryClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' }, // Removed dropdown, direct link to courses
    { name: 'About Us', path: '/about' },
    // { name: 'Workshops', path: '/workshops' },
    // { name: 'Join as Trainer', path: '/join-trainer' },
    // { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
  <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
    <div className="container mx-auto px-1 flex items-center justify-between h-20">
  
      {/* Logo + Brand */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/lovable-uploads/540b532e-034d-4136-a9b1-f88ed6fe9028.png"
          alt="Chetna Academy"
          className="w-[10.25rem] h-[4.67788rem] pl-3 flex-shrink-2 aspect-[180/58.85]"
        />
      </Link>
      {/* Navigation Links (centered) */}
      <nav className="hidden md:flex items-center space-x-[5.8rem] absolute left-1/2 transform -translate-x-1/2">
        <Link
          to="/"
          className="text-black text-[1.2rem] font-normal font-['Rethink_Sans'] hover:text-red-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-black text-[1.2rem] font-normal font-['Rethink_Sans'] hover:text-red-600 transition-colors"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-black text-[1.2rem] font-normal font-['Rethink_Sans'] hover:text-red-600 transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-black text-[1.2rem] font-normal font-['Rethink_Sans'] hover:text-red-600 transition-colors"
        >
          Contact Us
        </Link>
      </nav>
      {/* Verify Certificate Button */}
      <div className="hidden md:flex">
        <Link
          to="/courses"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-2 rounded-full shadow-md transition-all"
        >
          Verify Certificate
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
    
    {/* Optional Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t">
        <div className="container py-4 space-y-4">
          <div className="flex flex-col space-y-4 text-center text-[16px] font-medium text-black">
            <Link to="/" onClick={toggleMenu} className="hover:text-red-600">Home</Link>
            <Link to="/courses" onClick={toggleMenu} className="hover:text-red-600">Courses</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-red-600">About Us</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-red-600">Contact Us</Link>
          </div>
          <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full py-3 text-[16px]">
            <Link to="/courses" onClick={toggleMenu}>Verify Certificate</Link>
          </Button>
        </div>
      </div>
    )}
  </header>
);
};

export default Header;
