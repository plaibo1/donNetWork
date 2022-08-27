import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ContainerLayout } from '../components/ContainerLayout/ContainerLayout'

const Error404 = () => {
    return (
        <ContainerLayout>
            <div>

                <div className='text-center flex flex-col items-center mt-[100px]'>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold sm:font-black mb-10'>
                        Ууупс! Страница не найдена :(
                    </h1>

                    <Link href={'/'}>
                        <a className='w-full sm:w-[500px] flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-white bg-baseColor hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                            Вернуться на глваную
                        </a>
                    </Link>
                </div>

                <div className='relative w-[230px] h-[300px] sm:w-[350px] sm:h-[450px] mx-auto mt-10 sm:mt-20'>
                    <Image
                        src="/error404.png" alt="404img"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </ContainerLayout>
    )
}

export default Error404