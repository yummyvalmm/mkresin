import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const { tData } = useLanguage();
    const pfqs = tData('faq');

    return (
        <section className="py-24 bg-white">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter text-black mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500">Everything you need to know about ordering from MK Resin.</p>
                </div>

                <div className="space-y-4">
                    {pfqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary/20 bg-primary/5 shadow-sm' : 'border-border bg-white hover:border-slate-300'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0 ml-4" />
                                ) : (
                                    <Plus className="w-5 h-5 text-text-muted shrink-0 ml-4" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-text-muted leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
