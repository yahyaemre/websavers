import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

export default function ThemeSelector() {
    const themes = [
        {
            name: 'Numeric Duo',
            slug: 'numericduo',
        },
        {
            name: 'RigiBoo',
            slug: 'rigiboo',
        },
        {
            name: 'Blockify',
            slug: 'blockify',
        },
    ];

    return (
        <div className='font-poppins'>
            <h1 className='text-white text-3xl font-semibold text-center mt-10'>
                Choose a Theme
            </h1>
            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {themes.map((theme, index) => (
                    <Link to={`/themes/${theme.slug}`} key={theme.slug} >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={theme.slug}
                            className='w-[50%] h-20 mx-auto bg-neutral-900 rounded-lg px-4 py-4 text-white flex items-center justify-center mt-10'
                        >
                            <h1 className='text-center text-xl font-semibold '>
                                {theme.name}
                            </h1>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
