import React, { useRef, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import NumberFormat from 'react-number-format';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const FormPopUp = ({setIsOpen}) => {

    const [showNumberForm, setShowNumberForm] = useState(true);
    const [loaded, setLoaded] = useState(false)

    const {
        register,
        control,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    const onSubmit = (data) => {
        
        setLoaded(true);

        fetch('api/mailer', {
          method: 'post',
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            // setIsOpen(false)
            setLoaded(false)
        })
    }

    return (
        <div className="w-96">
            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white rounded-lg px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">Связаться со специалистом</h3>


                <div className='mb-8 w-full flex justify-center'>
                    <button
                        className={`${showNumberForm ? 'bg-baseColor text-white' : 'bg-white text-gray-800'} rounded-lg py-2.5 px-5 text-sm font-medium leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow mr-5`}
                        onClick={() => setShowNumberForm(true)} >Подключить услугу</button>

                    <button
                        className={`${!showNumberForm ? 'bg-baseColor text-white' : 'bg-white text-gray-800'} rounded-lg py-2.5 px-5 text-sm font-medium leading-5 ring-white ring-opacity-10 ring-offset-2 
                                ring-offset-baseColor focus:outline-none focus:ring-2 shadow`}
                        onClick={() => setShowNumberForm(false)} >Вопрос в техподдержку</button>
                </div>

                <div className="h-72">
                    {
                        showNumberForm ? <>
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
                                            {errors?.phone && <p>{errors?.phone?.message || 'Неправильный формат номера телефона.'}</p>}
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
                                Нажимая на кнопку «Жду звонка», вы предоставляете  ООО «Донтехсваязь»  согласие на обработку персональных данных.
                            </p>
                        </>
                            :
                        <>
                            '123'
                        </>
                    }
                </div>

            </div>
        </div>
    )
}

export default FormPopUp