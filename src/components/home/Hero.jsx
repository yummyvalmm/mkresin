import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/hero-warehouse.png';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Industrial Warehouse"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-blue-900/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,99,171,0.2)_0%,rgba(0,0,0,0.6)_100%)]"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-100 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>
                    {t('hero.badge')}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] whitespace-pre-line">
                    <span className="text-white drop-shadow-lg">
                        {t('hero.title')}
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/products"
                        className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/20 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                    >
                        {t('hero.cta_products')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                    >
                        {t('hero.cta_contact')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
