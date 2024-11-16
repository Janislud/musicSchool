import React, { useState } from 'react';
import musicLogo from '../Assets/Images/musicSchoolLogo.jpg';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="p-4 bg-blue-500 flex items-center justify-between">
   
            <div className="flex items-center">
                <img src={musicLogo} alt="Music School Logo" className="h-12 mr-4" />
                <span className="text-white text-xl font-bold">Music School</span>
            </div>

            <nav className="hidden md:flex space-x-4">
                <a href="/" className="text-white hover:text-gray-300">Home</a>
                <a href="/about" className="text-white hover:text-gray-300">About</a>
                <a href="/courses" className="text-white hover:text-gray-300">Courses</a>
                <Button variant="contained" className="bg-green-500 text-white hover:bg-green-600">
                    <a href="/signup">Sign Up</a>
                </Button>
            </nav>

            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    <MenuIcon className="text-white" />
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-blue-500">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                        <a href="/courses" className="text-white hover:text-gray-300">Courses</a>
                        <Button  variant="contained" className="bg-green-500 text-white hover:bg-green-600">
                            <a href="/signup">Sign Up</a>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
