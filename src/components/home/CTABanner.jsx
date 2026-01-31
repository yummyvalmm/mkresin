import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="relative rounded-[2.5rem] bg-primary overflow-hidden px-8 py-20 text-center shadow-2xl shadow-blue-900/20">

                    {/* Background glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                            Ready to scale your production?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                            Get premium materials, expert advice, and fast delivery for your next project.
                            Partner with Thailand's resin experts today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-base font-bold text-primary hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 border border-transparent hover:shadow-lg"
                            >
                                Get a Quote
                            </Link>
                            <Link
                                to="/products"
                                className="w-full sm:w-auto rounded-full bg-transparent border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
                            >
                                Browse Catalogue
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
