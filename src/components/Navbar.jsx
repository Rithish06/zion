import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Style for active links
    const activeStyle = "font-[700] border-b-[1px] border-[#4C1D61] text-[#4C1D61]";
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <>
            <div className={`fixed z-50 w-full flex flex-row gap-12 items-center justify-between md:justify-center p-5 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-white md:bg-transparent'}`}>
                <img src={assets.logo} className='w-[133px] h-auto' alt="Logo" />

                {/* Desktop Navigation */}
                <div className='hidden gap-10 md:flex'>
                    <NavLink 
                        to="/" 
                        end 
                        className={({ isActive }) => `font-['Mina'] ${isActive ? activeStyle : 'font-normal text-black '}`}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        className={({ isActive }) => `text-xl font-['Mina'] ${isActive ? activeStyle : 'font-normal '}`}
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to="/contact-us" 
                        className={({ isActive }) => `text-xl font-['Mina'] ${isActive ? activeStyle : 'font-normal text-black '}`}
                    >
                        Contact Us
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-10 h-10 flex flex-col items-center justify-center gap-1 group md:hidden"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className={`block w-7 h-1 bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-7 h-1 bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-7 h-1 bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed bg-white top-24 flex flex-col z-100 gap-4 w-full max-w-[400px] h-[87vh] p-3 shadow shadow-black backdrop-blur-lg transition-all duration-[0.5s] ${isOpen ? '-translate-x-[0px]' : '-translate-x-[500px]'} md:hidden`}>
                <NavLink 
                    to="/" 
                    end 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `text-black text-xl font-normal font-['Mina'] p-2 ${isActive ? activeStyle : ''}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/services" 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `text-black text-xl font-normal font-['Mina'] p-2 ${isActive ? activeStyle : ''}`}
                >
                    Services
                </NavLink>
                <NavLink 
                    to="/contact-us" 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `text-black text-xl font-normal font-['Mina'] p-2 ${isActive ? activeStyle : ''}`}
                >
                    Contact Us
                </NavLink>
            </div>
        </>
    )
}

export default Navbar;