import React from 'react';
import Link from 'next/link';
import {
    TrendingUp,
    Instagram,
    Facebook,
    Youtube,
    Twitter
} from 'lucide-react';
import ShimmerButton from './ui/ShimmerButton';

const Footer = () => {
    const usefulLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/faq', label: 'FAQ' },
        { href: '/trading-rules', label: 'Trading Rules' },
        { href: '/affiliate', label: 'Affiliate Program' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact Us' }
    ];

    const legalLinks = [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-and-conditions', label: 'Terms & Conditions' },
        { href: '/cookie-policy', label: 'Cookie Policy' }
    ];

    const contactLinks = [
        { href: 'mailto:support@Nupips.com', label: 'Email' },
        { href: '#', label: 'Live Chat' },
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
            className="text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 bottom-0 left-0 right-0 sm:mt-48 mt-24"
            style={{
                background: "radial-gradient(220.08% 207.93% at -70.37% -88.58%, rgb(68, 68, 68) 0%, rgb(0, 0, 0) 100%)",
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
                            <img
                                alt="Nupips Logo"
                                width="200"
                                height="200"
                                className="h-8 sm:h-12 w-auto"
                                src="https://Nupips-assets.s3.eu-north-1.amazonaws.com/public/logo.png"
                            />

                            <h3 className="text-xl my-6 sm:my-10 sm:text-3xl font-semibold text-white leading-tight">
                                Start Automated Trading Today!
                            </h3>

                            <div className="flex space-x-4 mb-12">
                                <ShimmerButton
                                    variant="gradient"
                                    className="flex items-center gap-2"
                                >
                                    <TrendingUp className="w-6 h-6" />
                                    Buy Challenge
                                </ShimmerButton>

                                <button className="border border-white text-white px-6 py-3 rounded-[10px] bg-transparent hover: /10 transition-all duration-300 font-medium">
                                    Talk To Us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social & Links */}
                    <div className="w-[100%] sm:w-[40%]">
                        {/* Social Media Icons */}
                        <div className="flex pb-6 space-x-3">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
                                        style={{ '--theme-color': social.color }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                                            style={{ background: social.color }}
                                        />
                                        <IconComponent size={16} className="relative z-10" />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Links Sections */}
                        <div className="flex w-full gap-6 sm:gap-12">

                            {/* Useful Links */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-400 mb-3">
                                    Useful Links
                                </h4>
                                <ul className="space-y-2.5 text-sm text-gray-300">
                                    {usefulLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-400 mb-3">
                                    Legal
                                </h4>
                                <ul className="space-y-2.5 text-sm text-gray-300">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Links */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-neutral-400 mb-3">
                                    Contact Us
                                </h4>
                                <ul className="space-y-2.5 text-sm text-gray-300">
                                    {contactLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className="hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright & Legal Text */}
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700/50">
                <p className="text-sm text-neutral-400 mb-4">
                    © 2023-2025 Nupips. All rights reserved.
                </p>

                <div className="text-xs text-neutral-400 space-y-4">
                    <p>
                        Nupips provides simulated trading challenges for educational and evaluation purposes.
                        All trading is carried out in a simulated environment and does not involve live market execution
                        or risk to capital. While conditions are designed to mirror real markets, they may not fully
                        reflect factors such as liquidity or slippage. Traders who successfully complete the programs
                        are eligible to receive real payouts from Nupips.
                    </p>

                    <p>
                        Nothing offered by Nupips should be interpreted as financial advice, a recommendation,
                        or a solicitation to buy or sell any financial instrument. The services are not intended for
                        live trading or real investment activity.
                    </p>

                    <p>
                        Use of Nupips's platform and information is entirely at your own risk. Nupips
                        makes no guarantees regarding the accuracy, reliability, or potential outcomes of simulated
                        trading performance and assumes no liability for any decisions made based on this content.
                        No investment or trading advice is given or implied.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
