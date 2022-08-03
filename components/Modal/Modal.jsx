import React from 'react'
import s from './modal.module.sass'

const Modal = ({modalStatus, setModalStatus, children}) => {
  return (
    <div className={modalStatus ? `${s.modal} ${s.active}` : `${s.modal}`} onMouseDown={() => setModalStatus(false)}>
        <div className={modalStatus ? `${s.modal__content} ${s.active} scroll` : `${s.modal__content} scroll`} onMouseDown={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal