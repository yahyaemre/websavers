import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.5 }}
            className='text-center text-white font-poppins'
        >
            <h1 className='lg:text-4xl text-3xl font-semibold mb-2'>
                websavers
            </h1>
            <p className='lg:text-lg text-sm font-thin mb-5'>
                WebView based screen saver themes with good design.
            </p>
            <Link to='themes' className='block lg:w-[50%] text-center mx-auto w-[90%] bg-neutral-900 rounded-lg px-4 py-4 text-white'>
                Explore Themes
            </Link>
            <br />
            <a href='#' className='text-neutral-700'>
                GitHub Repo
            </a>
        </motion.div>
    )
}
