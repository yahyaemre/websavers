import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function Blockify() {

    var tempHour = new Date().getHours().toString().padStart(2, '0');
    var tempMinute = new Date().getMinutes().toString().padStart(2, '0');


    const [hour, setHour] = useState(tempHour);
    const [minute, setMinute] = useState(tempMinute);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hour = now.getHours().toString().padStart(2, '0');
            const minute = now.getMinutes().toString().padStart(2, '0');
            setHour(hour);
            setMinute(minute);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='select-none'>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex text-white font-nabla text-9xl text-right font-bold '>
                    <motion.p
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 5 }}
                    >
                        {hour}
                    </motion.p>
                    <span>
                        :
                    </span>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 5 }}
                    >
                        {minute}
                    </motion.p>
                </div>
            </div>
        </div>
    )
}
