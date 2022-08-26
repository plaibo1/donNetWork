import React from 'react'
import {motion} from 'framer-motion'

const ErrorAlert = ({setIsError}) => {
    return (
        <motion.div className="w-full bg-red-500 text-white px-5 pt-3 pb-8 mb-5 rounded-lg relative">
            <div className='mb-5 text-base sm:text-xl'>
                Произошла ошибка. Сейчас ведутся работы на сервере, но вы можете оставть заявку
                по бесплатному номеру: <br />
                <a href="tel:+7(863)202-00-00" className='px-2 py-1 bg-baseColor-20 rounded-md mt-2 inline-block'>+7 (863) 202-00-00</ a>
            </div>
            <button
                onClick={() => setIsError(false)}
                className='px-5 py-1 bg-red-400 text-base hover:bg-red-700 absolute right-2 bottom-2 rounded-md'>
                ок
            </button>
        </motion.div>
    )
}

export default ErrorAlert