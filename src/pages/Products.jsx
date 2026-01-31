import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
    const { t } = useLanguage();
    const categories = t('product_categories') || [];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 md:pt-32">
            <div className="container-custom">
                <h1 className="text-4xl font-bold mb-12 tracking-tight">{t('nav.products')}</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((item, index) => (
                        <div key={index} className="group border border-gray-100 p-6 hover:border-primary transition-colors duration-300 cursor-pointer flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gray-50 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Package className="w-6 h-6" />
                                </div>
                                <span className="font-medium text-lg">{item}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
