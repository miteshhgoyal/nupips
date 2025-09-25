"use client";
import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import ShimmerButton from './ui/ShimmerButton';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/trading-rules', label: 'Trading Rules' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact Us' }
    ];

    return (
        <div className="inset-x-0 z-50 w-full fixed top-0 left-0 right-0">
            {/* Desktop Navigation */}
            <div
                className="relative z-[50] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between px-4 py-4 lg:flex"
                style={{
                    background: 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                {/* Logo */}
                <a href="/" className="relative flex items-center space-x-2 z-[60] flex-shrink-0">
                    <img
                        src="https://Nupips-assets.s3.eu-north-1.amazonaws.com/public/logo.png"
                        alt="Nupips Logo"
                        className="h-8 lg:h-10 w-auto"
                    />
                </a>

                {/* Navigation Links - Centered */}
                <div className="flex-1 flex justify-center">
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

                {/* Action Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                        href="/login"
                        className="px-4 py-2 rounded-lg bg-transparent text-base font-medium text-white hover:text-neutral-200 hover:bg-white/10 transition-all duration-200"
                    >
                        Login
                    </a>

                    <ShimmerButton
                        variant="gradient"
                        size="md"
                        className="flex items-center gap-2"
                    >
                        <TrendingUp className="w-5 h-5" />
                        Buy Challenge
                    </ShimmerButton>
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
                        <img
                            src="https://Nupips-assets.s3.eu-north-1.amazonaws.com/public/logo.png"
                            alt="Nupips Logo"
                            className="h-7 sm:h-8 w-auto"
                        />
                    </a>

                    <div className='flex items-center gap-1'>
                        <a
                            href="/login"
                            className="block px-4 py-3 text-white hover:text-neutral-200 hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                        >
                            Login
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button></div>
                </div>

                {/* Mobile Menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-4 pb-4 space-y-0">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block px-2 py-1 text-white hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="pt-4 w-fit">
                            <ShimmerButton
                                variant="gradient"
                                size="md"
                                className="flex items-center justify-center gap-2 w-full"
                            >
                                <TrendingUp className="w-4 h-4" />
                                Buy Challenge
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
