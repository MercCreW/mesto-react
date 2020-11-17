import React from 'react';

function PopupWithForm(props){
    return(
        <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_open' : ''}`}>
        <div className="modal__container">
            <button className="modal__close-button" onClick={props.onClose}></button>
            <h2 className="modal__title">{props.title}</h2>
            <form className="modal__edit-form" name={props.name} novalidate>
                {props.children}
                <button id={props.idButton} className="modal__save-button">{props.buttonText}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;