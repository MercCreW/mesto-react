import React from 'react';


function Card(props) {

    function handleClick() {
        props.onCardClick({link: props.link, name: props.name, alt: props.alt});
    }

    return(
        <li className="element">
            <article> 
                <button type="button" className={`element__delete-button ${props.owner ? 'element__delete-button_owner' : ''}`}></button>
                <img className="element__image"  src={props.link} alt={props.name} onClick={handleClick} />
                <div className="element__items">
                    <h2 className="element__title">{props.name}</h2>
                    <div className="element__likes-box"> 
                        <button type="button" className="element__like-button"></button>
                        <span className="element__count-likes">{props.like}</span>
                    </div>
                </div>
            </article>
        </li>
    );
}

export default Card;