import React from 'react'
import s from './modal.module.sass'
import { FaTimes } from 'react-icons/fa'

const Modal = ({modalStatus, setModalStatus, children}) => {
  return (
    <div className={modalStatus ? `${s.modal} ${s.active}` : `${s.modal}`} onMouseDown={() => setModalStatus(false)}>
        <div className={modalStatus ? `${s.modal__content} ${s.active} scroll` : `${s.modal__content} scroll`} onMouseDown={e => e.stopPropagation()}>
            <button className='bg-red-400 z-20 p-2 absolute top-0 right-0 rounded-bl-md text-white active:scale-90 active:bg-red-500' onClick={() => setModalStatus(false)}><FaTimes /></button>
            {children}
        </div>
    </div>
  )
}

export default Modal