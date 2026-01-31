import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to Thai as requested ("Change to Thai language")
    // but check localStorage first
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'th';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'th' ? 'en' : 'th');
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
            if (!value) return key; // Return key if translation missing
        }

        return value;
    };

    // Helper for arrays (like products, faq)
    const tData = (key) => {
        return translations[language][key] || [];
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, tData }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
