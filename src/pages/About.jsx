import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { iconMap } from '../data/translations';

const About = () => {
    const { t, tData } = useLanguage();
    const businessUnits = tData('about.units');

    return (
        <div className="bg-white pb-24">
            {/* Header Section */}
            <div className="relative bg-black pt-32 pb-20 px-6">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        {t('about.title')}
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom -mt-10 relative z-20">
                <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="flex items-start gap-4 mb-8">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                            <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-text-main mb-2">{t('about.story_title')}</h2>
                            <p className="text-text-muted leading-relaxed">
                                {t('about.story_text')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {businessUnits.map((unit, index) => {
                            const Icon = iconMap[unit.iconKey];
                            return (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg group">
                                    <div className={`w-12 h-12 rounded-xl ${unit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {Icon && <Icon className="w-6 h-6" />}
                                    </div>
                                    <h3 className="font-bold text-text-main mb-3">{unit.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                                        {unit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-text-main mb-4">{t('about.cta_title')}</h2>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        {t('about.cta_button')} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
