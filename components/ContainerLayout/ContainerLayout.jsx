import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import style from './layout.module.sass'

export function ContainerLayout({children})  {
  return (
    <div className="container max-w-7xl mx-auto px-5 py-5 md:py-24">
      {children}
    </div>
  )
}

const PopUpWrapperForMotion = forwardRef((props, ref) => {
  return (
    <div className={style.popUpWrapper} ref={ref}>
      {props.children}
    </div>
  )
})

export const PopUpWrapper = motion(PopUpWrapperForMotion)