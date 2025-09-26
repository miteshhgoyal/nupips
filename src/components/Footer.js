import React from 'react';
import Link from 'next/link';
import {
    TrendingUp,
    Instagram,
    Facebook,
    Youtube,
    Twitter
} from 'lucide-react';
import logo from '../assets/nupips-logo.png';
import Image from 'next/image';

const Footer = () => {
    const usefulLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact Us' }
    ];

    const legalLinks = [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-and-conditions', label: 'Terms & Conditions' },
        { href: '/cookie-policy', label: 'Cookie Policy' }
    ];

    const contactLinks = [
        { href: 'mailto:info@nupips.com', label: 'Email' },
        { href: '/contact', label: 'Connect With Us' }
    ];

    const socialLinks = [
        {
            href: 'https://x.com/',
            icon: Twitter,
            label: 'Twitter',
            color: '#000000'
        },
        {
            href: 'https://www.instagram.com/nupips/',
            icon: Instagram,
            label: 'Instagram',
            color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
        },
        {
            href: 'https://www.facebook.com/',
            icon: Facebook,
            label: 'Facebook',
            color: '#1877F2'
        },
        {
            href: 'https://www.youtube.com/',
            icon: Youtube,
            label: 'YouTube',
            color: '#FF0000'
        }
    ];

    return (
        <footer
            className="relative z-50 -black backdrop-blur-sm border-2 bg-black/10 border-gray-500/10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 bottom-0 left-0 right-0 sm:mt-48 mt-24"
            style={{
                zIndex: 20,
                opacity: 1,
                transform: 'none'
            }}
        >
            <div className="flex max-w-6xl mx-auto">
                <div className="flex px-4 sm:px-0 sm:flex-row flex-col w-full">
                    {/* Left Section - Logo, CTA, Buttons */}
                    <div className="w-[100%] sm:w-[60%]">
                        <div className="space-y-5">
                            <Image
                                src={logo}
                                width={160}
                                height={60}
                                alt="Nupips Logo"
                                sizes="(max-width: 480px) 120px, (max-width: 768px) 140px, 160px"
                                className="w-auto h-auto max-w-[120px] max-h-[45px] sm:max-w-[140px] sm:max-h-[52px] md:max-w-[160px] md:max-h-[60px]"
                            />

                            <h3 className="text-xl my-6 sm:my-10 sm:text-3xl font-semibold text-primary leading-tight">
                                Start Automated Trading Today!
                            </h3>

                            <div className="flex space-x-4 mb-12">
                                <a href='/contact' className="border border-black -black px-6 py-3 rounded-[10px] bg-transparent hover:bg-white/10 transition-all duration-300 font-medium">
                                    Talk To Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social & Links */}
                    <div className="w-[100%] sm:w-[40%]">
                        {/* Social Media Icons */}
                        {/* <div className="flex pb-6 space-x-3">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-neutral-500 hover:-black transition-all duration-300 relative overflow-hidden group"
                                        style={{ '--theme-color': social.color }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                                            style={{ background: social.color }}
                                        />
                                        <IconComponent size={16} className="relative z-10" />
                                    </Link>
                                );
                            })}
                        </div> */}

                        {/* Links Sections */}
                        <div className="flex w-full gap-6 sm:gap-12">
                            {/* Useful Links */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-500 mb-3">
                                    Useful Links
                                </h4>
                                <ul className="space-y-2.5 text-sm text-neutral-500">
                                    {usefulLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:-black transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Links */}
                            {/* <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-500 mb-3">
                                    Legal
                                </h4>
                                <ul className="space-y-2.5 text-sm text-neutral-500">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:-black transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}

                            {/* Contact Links */}
                            {/* <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-500 mb-3">
                                    Contact Us
                                </h4>
                                <ul className="space-y-2.5 text-sm text-neutral-500">
                                    {contactLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:-black transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright & Legal Text */}
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700/50">
                <p className="text-sm text-neutral-500 mb-4">
                    © 2025 Nupips. All rights reserved.
                </p>

                <div className="text-xs text-neutral-500 space-y-4">
                    <p>
                        Nupips provides comprehensive forex and algorithmic trading evaluation programs for aspiring traders.
                        All trading activities are conducted in a simulated environment that mirrors real forex market conditions,
                        including major, minor, and exotic currency pairs. Our evaluation process tests your risk management,
                        trading psychology, and strategy execution without risking live capital. Successful traders who meet
                        our performance criteria gain access to funded trading accounts with real profit-sharing opportunities.
                    </p>

                    <p>
                        Our algorithmic trading challenges evaluate automated trading systems across multiple forex pairs
                        and market sessions. All content, strategies, and educational materials provided by Nupips are
                        for educational and evaluation purposes only and should not be interpreted as financial advice,
                        investment recommendations, or solicitations to trade forex or deploy algorithmic systems in live markets.
                    </p>

                    <p>
                        Forex trading and algorithmic trading involve substantial risk of loss and may not be suitable for all traders.
                        Past performance of trading strategies, whether manual or automated, does not guarantee future results.
                        Market conditions, spreads, slippage, and execution speeds in our simulated environment may differ from
                        live trading conditions. Nupips assumes no liability for trading decisions, strategy development, or
                        algorithmic system deployment based on our evaluation programs or educational content.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
