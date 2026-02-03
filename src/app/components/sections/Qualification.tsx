'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { qualificationsData } from '@/data/qualifications';

export function Qualification() {
    return (
        <section id="qualification" className="pt-2 pb-24 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-15 h-px bg-gray-300"></div>
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-darkgray">QUALIFICATION</h2>
                        <div className="w-15 h-px bg-gray-300"></div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {qualificationsData.map((qual, index) => {
                            const Icon = qual.icon || (() => null);
                            return (
                                <motion.div
                                    key={qual.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center text-white mr-4">
                                        <Icon size={20} />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-base font-bold text-dark-gray mb-1">
                                            {qual.name}
                                        </h3>
                                        <div className="text-gray-500 font-medium text-sm">
                                            {qual.date}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
