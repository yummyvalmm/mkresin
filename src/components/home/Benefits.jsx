import React from 'react';
import { Truck, ShieldCheck, Users, BadgePercent } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: "Premium Quality",
        description: "Sourced from top global manufacturers to ensure consistency."
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Nationwide shipping within 24 hours for in-stock items."
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "40+ years of technical expertise to guide your projects."
    },
    {
        icon: BadgePercent,
        title: "Competitive Pricing",
        description: "Best market rates for both retail and wholesale orders."
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container-custom">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl font-bold tracking-tighter text-black mb-6">
                        Why industry leaders <br />
                        <span className="text-gray-400">choose MK Resin.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <div className="mb-6 p-4 rounded-2xl bg-surface group-hover:bg-primary/10 transition-colors">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
