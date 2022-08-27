import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useConfettiFire from './Confetti'

const SuccessModal = ({setIsSuccess, userNumber}) => {

    const {fire, render} = useConfettiFire()

    return (
        <div 
            onClick={fire}
            className='w-[300px] sm:w-[500px] h-[430px] p-8 bg-white text-center flex flex-col justify-between'>

            <div>
                <div className='text-2xl font-bold mb-3 sm:text-4xl'>Заявка отпрвлена</div>
                <div className='text-base mb-3 sm:text-xl'>Мы перезвоним вам, как можно скорее!</div>

                
                <motion.div 
                    initial={{ rotate: 40 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{originX: 1, originY: 0}}
                    >
                        
                    <Image
                        width={140}
                        height={140}
                        src={'/thumbsUp.png'}
                        priority
                    />
                </motion.div>

                <span className='text-md font-semibold block'>Проверьте номер</span>
                <span className='text-md'>Вы ввели: {userNumber}</span>
                
            </div>

            <motion.button
                onClick={() => setIsSuccess(false)}
                className="w-full  flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md bg-indigo-100 hover:bg-indigo-200 text-baseColor"
            >
                Ок
            </motion.button>

           {render}
        </div>
    )
}

export default SuccessModal