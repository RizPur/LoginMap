import React from 'react'

const Modal = (props) => {
    return (
        <div className={`main-modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            {/* if show value is true, ^^ we will have 1 extra className called .show which will be used to animate in the next step */} 
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal header'>
                    <button className='close-btn' onClick={props.onClose}>X</button>
                    <h4 className='modal-title'>{props.title}</h4>
                </div>
                <div className='modal-body'>{props.children}</div>
            </div>
        </div>
    )
}

export default Modal