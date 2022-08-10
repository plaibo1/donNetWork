import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import NumberFormat from 'react-number-format';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import style from './formPopUp.module.sass'
import Image from 'next/image'

const FormPopUp = ({setIsOpen}) => {

    const [showNumberForm, setShowNumberForm] = useState(true);
    const [loaded, setLoaded] = useState(false)
    const [isError, setIsError] = useState(false)

    const {
        register,
        control,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    const onSubmit = async (data) => {

        setLoaded(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer`, {
                method: 'post',
                body: JSON.stringify(data),

            })
                .then(res => res.json())
                .then(res => {
                    setIsOpen(false)
                    setLoaded(false)
                    console.log(res)
                })
        }
        catch (err) {
            if (err) {
                setIsError(true)
                setShowNumberForm(false)
                setLoaded(false)
            }
        }
    }

    return (
        <div className={`${style.formPopUpWidth}`}>
            <div className="relative z-10 px-5 pt-8 pb-8 sm:pb-12 h-auto bg-white rounded-lg sm:px-7">

                <h3 className="mb-6 text-2xl font-medium text-center">Связаться со специалистом</h3>

                <div className='mb-8 w-full flex justify-center'>
                    <button
                        className={`${showNumberForm ? 'bg-baseColor text-white' : 'bg-white text-gray-800'} rounded-lg py-2.5 px-3 sm:px-5 text-xs sm:text-sm font-medium leading-4 sm:leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow mr-5`}
                        onClick={() => setShowNumberForm(true)}>Подключить услугу</button>

                    <button
                        className={`${!showNumberForm ? 'bg-baseColor text-white' : 'bg-white text-gray-800'} rounded-lg px-3 py-2.5 sm:px-5 text-xs sm:text-sm font-medium leading-4 sm:leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow`}
                        onClick={() => setShowNumberForm(false)} >Вопрос в техподдержку</button>
                </div>

                <div className="sm:h-72">
                    {
                        showNumberForm ? <>

                            <p className='text-gray-500 text-xs md:text-base mb-3'>
                                Оформить заявку, получить информацию о тарифах и подключении
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label>

                                    <span className='block mb-3 font-medium'>Контактный номер</span>

                                    <>
                                        <Controller
                                            control={control}
                                            name="phone"
                                            defaultValue=""
                                            rules={{ required: true, message: 'test test test' }}

                                            render={({ field: { onChange, ref, name, value } }) => (
                                                <NumberFormat
                                                    format="+7 (###) ### ## ##"
                                                    mask='_'
                                                    name={name}
                                                    value={value}
                                                    onChange={onChange}
                                                    className="block w-full px-4 py-3 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                                />
                                            )}
                                        />

                                        <div className='text-red-500 h-8'>
                                            {errors?.phone && <p>{errors?.phone?.message || 'Введите номера телефона'}</p>}
                                        </div>
                                    </>
                                    
                                </label>

                                <div className="block">
                                    <span className='text-sm block mb-1'>Звоним с 10:00 до 21:00.</span>
                                    <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg" disabled={loaded}>
                                        {loaded ? <AiOutlineLoading3Quarters className='mx-auto h-5 loading text-xl'/> : "Жду звонка"}
                                    </button>
                                </div>
                            </form>

                            <p className="w-full mt-4 text-sm text-center text-gray-500">
                                Нажимая на кнопку «Жду звонка», вы предоставляете  ООО «Донтехсваязь»  
                                согласие на обработку персональных данных.
                            </p>
                        </>
                            :
                        <>
                            {
                                isError ?
                                <div className="w-full bg-red-500 text-white px-5 pt-3 pb-8 mb-5 rounded-lg relative">
                                    <div className='mb-5'>
                                        Произошла ошибка. Сейчас ведутся работы на сервере, но вы можете оставть заявку
                                        по бесплатному номеру:
                                        <a href="tel:+7(863)202-00-00" className='px-2 py-1 bg-baseColor-20 rounded-md mt-2 inline-block'>+7 (863) 202-00-00</ a>
                                    </div>
                                    <button
                                        onClick={() => setIsError(false)}
                                        className='px-5 py-1 bg-red-400 hover:bg-red-700 absolute right-2 bottom-2 rounded-md'>
                                        ок
                                    </button>
                                </div>
                                :
                                null
                            }

                            <div>

                                <p className='text-gray-500 text-xs md:text-base mb-3'>
                                    Вопросы о работе оборудования, платежах, смене тарифа, подключении услуг
                                </p>

                                <div className='z-20'>

                                    <div className='-mb-8 -z-10 relative w-full flex justify-center'>
                                        <Image 
                                            src='/rocket.png'
                                            alt='call us image'
                                            width={123}
                                            height={150}
                                        />
                                    </div>
                                    

                                    <div className='bg-slate-200 p-4 rounded-lg z-10'>
                                        <div className='mb-3 font-normal text-base'>
                                            Для оперативного решения вопроса позвоните по бесплатному телефону:
                                        </div>
                                        <a href="tel:+7(863)202-00-00" className='text-baseColor text-xl sm:text-2xl font-medium'>+7 (863) 202-00-00</ a>
                                    </div>
                                </div>

                            </div>

                        </>
                    }

                </div>

            </div>
        </div>
    )
}

export default FormPopUp
