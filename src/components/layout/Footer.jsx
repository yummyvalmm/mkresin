import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white text-text-main pt-20 pb-10 border-t border-gray-100">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-5 pr-8">
                    <Link to="/" className="inline-block mb-6">
                        <span className="font-bold text-2xl tracking-tighter text-black">MK Resin</span>
                    </Link>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm mb-8">
                        {t('footer.about')}
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" /></svg>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-semibold mb-6 text-sm text-black">{t('footer.product_header')}</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><Link to="/products" className="hover:text-primary transition-colors">Polyester Resin</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Fiberglass</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Silicon Rubber</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Accessories</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-semibold mb-6 text-sm text-black">{t('footer.company_header')}</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="col-span-1 md:col-span-3">
                    <h4 className="font-semibold mb-6 text-sm text-black">{t('footer.contact_header')}</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-bg-primary shrink-0 text-primary" />
                            <span>27/12 Moo 1, Rama 2 Rd., Bang Nam Chuet, Mueang, Samut Sakhon 74000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-bg-primary shrink-0 text-primary" />
                            <span>034 441 542 - 4</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-bg-primary shrink-0 text-primary" />
                            <span>contact@mkresin.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-black">{t('footer.privacy')}</Link>
                    <Link to="#" className="hover:text-black">{t('footer.terms')}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
