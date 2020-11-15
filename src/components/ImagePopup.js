import React from 'react';

function ImagePopup({onClose, card}){
    

    return(
        <div className={`modal modal_type_img-big  ${card != null ? 'modal_open' : ''}`} >
            <div className="modal__window-container">
                <button type="button" className="modal__close-button" onClick={onClose} ></button>
                <img className="modal__image" src={card != null ? card.link : '#'} alt={card != null ? card.name : ''}/>
                <h2 className="modal__description" >{card != null ? card.name : ''}</h2>
            </div> 
        </div>
    )
}

export default ImagePopup;