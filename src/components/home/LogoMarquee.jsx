import React from 'react';

const LogoMarquee = () => {
    const brands = [
        "ConstructCo", "ResinTech", "FiberSys", "PolyChem", "InnovaGroup", "BuildMate",
        "TechCore", "AdvanceMat", "ConstructCo", "ResinTech", "FiberSys", "PolyChem", "InnovaGroup"
    ];

    return (
        <section className="bg-white border-b border-gray-100 py-10 overflow-hidden">
            <div className="container-custom mb-6 text-center">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by industry leaders</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee gap-16 whitespace-nowrap min-w-full items-center">
                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors uppercase tracking-tight select-none"
                        >
                            {brand}
                        </span>
                    ))}
                    {brands.map((brand, index) => (
                        <span
                            key={`dup-${index}`}
                            className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors uppercase tracking-tight select-none"
                        >
                            {brand}
                        </span>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default LogoMarquee;
