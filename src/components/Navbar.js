"use client";
import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import logo from '../assets/nupips-logo.png';
import Image from 'next/image';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact Us' }
    ];

    return (
        <div className="inset-x-0 z-50 w-full fixed top-0 left-0 right-0">
            {/* Desktop Navigation */}
            <div
                className="relative z-[50] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between px-4 py-4 lg:flex"
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                {/* Logo - Desktop */}
                <a href="/" className="relative flex items-center space-x-2 z-[60] flex-shrink-0">
                    <Image
                        src={logo}
                        width={160}
                        height={60}
                        alt="Nupips Logo"
                        sizes="(max-width: 1024px) 140px, 160px"
                        className="w-auto h-auto max-w-[160px] max-h-[60px]"
                        priority
                    />
                </a>

                {/* Navigation Links - Centered */}
                <div className="flex justify-center">
                    <div className="flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                className="relative px-4 py-2 group text-white hover:text-primary text-base transition-all duration-200 whitespace-nowrap font-medium"
                                href={link.href}
                            >
                                <span className="relative z-20">{link.label}</span>
                                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className="relative z-[50] mx-auto flex w-full flex-col lg:hidden"
                style={{
                    background: 'rgba(0, 0, 0, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: isMobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}
            >
                {/* Mobile Header */}
                <div className="flex w-full items-center justify-between px-4 py-3">
                    <a href="/" className="relative flex items-center space-x-2 z-[60]">
                        <Image
                            src={logo}
                            width={160}
                            height={60}
                            alt="Nupips Logo"
                            sizes="(max-width: 480px) 100px, (max-width: 768px) 120px, 140px"
                            className="w-auto h-auto max-w-[100px] max-h-[38px] sm:max-w-[120px] sm:max-h-[45px] md:max-w-[140px] md:max-h-[52px]"
                            priority
                        />
                    </a>

                    <div className='flex items-center gap-1'>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="-black p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-4 pb-4 space-y-0">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block px-2 py-1 -black hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
