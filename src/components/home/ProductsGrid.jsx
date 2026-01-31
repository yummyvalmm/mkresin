import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { iconMap } from '../../data/translations';

const ProductsGrid = () => {
    const { t, tData } = useLanguage();
    const products = tData('products');

    return (
        <section className="py-24 bg-surface">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
                            {t('nav.products')}
                        </h2>
                        <p className="text-text-muted text-lg max-w-xl">
                            {t('hero.description')}
                        </p>
                    </div>

                    <Link to="/products" className="hidden md:flex items-center gap-2 font-semibold text-primary hover:text-primary-dark hover:gap-3 transition-all">
                        {t('hero.cta_products')} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((item, index) => {
                        const Icon = iconMap[item.iconKey];
                        return (
                            <Link
                                to="/products"
                                key={index}
                                className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                    {Icon && <Icon className="w-7 h-7" />}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-text-muted leading-relaxed mb-6 text-sm">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-text-muted/60 group-hover:text-primary transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-primary">
                        {t('hero.cta_products')} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsGrid;
