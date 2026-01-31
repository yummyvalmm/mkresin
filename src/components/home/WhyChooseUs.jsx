import React from 'react';
import { Check } from 'lucide-react';

const sectors = [
    "Automotive & Repair",
    "Marine & Boat Building",
    "Construction & Architecture",
    "Arts & Sculptures",
    "Industrial Tanks & Pipes",
    "DIY & Hobby Projects",
    "Furniture Manufacturing",
    "Mold Making"
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6">
                            Serving industries <br />
                            <span className="text-gray-400">with precision.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            For over 40 years, MK Resin has been the trusted partner for professionals and businesses across Thailand. We provide high-quality composite materials that meet the rigorous demands of various sectors.
                        </p>
                        <div className="inline-flex items-center gap-2 font-semibold text-primary cursor-pointer hover:gap-3 transition-all">
                            About our company <span aria-hidden="true">&rarr;</span>
                        </div>
                    </div>

                    {/* Right Column: Check List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {sectors.map((sector, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-300">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                    <Check className="w-3.5 h-3.5 text-primary" />
                                </div>
                                <span className="text-lg font-medium text-gray-900">{sector}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
