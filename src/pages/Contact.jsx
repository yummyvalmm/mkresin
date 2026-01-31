import React from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white py-24 md:py-32">
            <div className="container-custom">
                <h1 className="text-4xl font-bold mb-16 tracking-tight">{t('contact.title')}</h1>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Info Column */}
                    <div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <MapPin className="w-6 h-6" />
                                    {t('contact.info.address')}
                                </h3>
                                <p className="text-gray-600 pl-9">
                                    27/12 Moo 1, Rama 2 Rd., Bang Nam Chuet,<br />
                                    Mueang, Samut Sakhon 74000
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Phone className="w-6 h-6" />
                                    {t('contact.info.phone')}
                                </h3>
                                <div className="pl-9 space-y-2 text-gray-600">
                                    <p>034 441 542 - 4</p>
                                    <p>(088) 809-5267-71</p>
                                    <p>034 441 544</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <Clock className="w-6 h-6" />
                                    {t('contact.info.hours')}
                                </h3>
                                <div className="pl-9 space-y-2 text-gray-600">
                                    <p><span className="font-semibold text-black">{t('contact.info.mon_fri')} :</span> 8.00 - 17.00</p>
                                    <p><span className="font-semibold text-black">{t('contact.info.sat')} :</span> 8.00 - 16.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-surface p-10 lg:p-12 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8">{t('contact.subtitle')}</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">{t('contact.form.name')}</label>
                                <input type="text" id="name" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary ring-0 transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">{t('contact.form.email')}</label>
                                <input type="email" id="email" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary ring-0 transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2">{t('contact.form.message')}</label>
                                <textarea id="message" rows="4" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary ring-0 transition-colors"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg">
                                {t('contact.form.submit')}
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
