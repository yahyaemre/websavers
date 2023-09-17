import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function NumericDuo() {

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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='flex items-center justify-center h-screen'>
                <div className='text-white font-dbxl text-9xl text-right font-bold '>
                    <p>
                        {hour}
                    </p>
                    <p className='bordered mt-[-27px] text-transparent'>
                        {minute}
                    </p>
                </div>

            </motion.div>
        </div>
    )
}
