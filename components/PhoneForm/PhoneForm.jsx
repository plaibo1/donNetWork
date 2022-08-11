import { useForm, Controller } from "react-hook-form";
import NumberFormat from 'react-number-format';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { useState } from "react";

import { motion } from 'framer-motion'

const PhoneForm = ({setIsError, setShowNumberForm, setIsOpen}) => {
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

  const onSubmit = async (data) => {

    setLoaded(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer`, {
        method: 'post',
        body: JSON.stringify(data),

      })
        .then(res => res.json())
        .then(res => {
          if (setIsOpen) setIsOpen(false)
          setLoaded(false)
          console.log(res)
        })
    }
    catch (err) {
      if (err) {
        console.log(err)
        setIsError(true)
        if (setShowNumberForm) setShowNumberForm(false)
        setLoaded(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>

        <span className='block mb-3 font-medium text-base'>Контактный номер</span>

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
                placeholder={'+7 (000) 00 00 00'}
                className="block w-full px-4 py-3 border-2 border-transparent text-base border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              />
            )}
          />

          <div className='text-red-500 h-8 text-base'>
            {errors?.phone && <p>{errors?.phone?.message || 'Введите номера телефона'}</p>}
          </div>
          
        </>

      </label>

      <div className="block">
        <span className='text-sm block mb-1'>Звоним с 10:00 до 21:00.</span>
        <motion.button 
          initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.1}}
          className="w-full text-base px-3 py-4 font-medium text-white bg-blue-600 rounded-lg" 
          disabled={loaded}>

          {loaded ? <AiOutlineLoading3Quarters className='mx-auto h-5 loading text-xl' /> : "Жду звонка"}
        </motion.button>
      </div>

      <p className="w-full mt-4 text-sm text-center text-gray-500">
        Нажимая на кнопку «Жду звонка», вы предоставляете  ООО «Донтехсваязь»
        согласие на обработку персональных данных.
      </p>
    </form>
  )
}

export default PhoneForm