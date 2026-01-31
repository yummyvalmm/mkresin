import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/logo.webp';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const navigation = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.products'), href: '/products' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
            <nav className="container-custom h-[88px] flex items-center justify-between" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <img className="h-10 w-auto" src={logo} alt="MK Group Logo" />
                        <span className="font-bold text-xl tracking-tight text-black">MK Resin</span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        {language === 'en' ? 'TH' : 'EN'}
                    </button>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex lg:gap-x-10 items-center">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className="text-[15px] font-medium leading-6 text-gray-600 hover:text-black transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Language Switcher Desktop */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface hover:bg-surface-highlight border border-border text-sm font-medium text-text-main transition-colors ml-4"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase">{language}</span>
                    </button>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        to="/contact"
                        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        {t('nav.contact')}
                    </Link>
                </div>
            </nav>

            {/* Mobile menu panel */}
            {isOpen && (
                <div className="lg:hidden absolute top-[88px] left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-fade-in z-40">
                    <div className="space-y-1 px-6 py-6 font-medium">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="-mx-3 block rounded-lg px-3 py-3 text-base leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="mt-4 block w-full text-center rounded-full bg-primary px-3 py-3 text-base font-semibold text-white hover:bg-primary-dark"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('nav.contact')}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
