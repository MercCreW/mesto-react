import React from 'react';
import editButton from '../images/profile__avatar-edit-button.png';
import api from '../utils/Api';
import Card from '../components/Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const [cards, setCards] = React.useState([]);
    const setCurrentUser = React.useContext(CurrentUserContext);


    React.useEffect(()=>{
        api.getInitialCards()
        .then((userCards)=>{
            setCards(userCards)
        })
        .catch((err) => console.log(err));
    }, []);

    const {name, avatar, about} = setCurrentUser;

    return(
        <main className="content">
        <section className="profile">
            <div className ="profile__card">
                <img className="profile__avatar" src={`${avatar}`} alt="Исследователь океана Жак Ив Кусто" />
                <img onClick={props.onEditAvatar } className="profile__avatar-edit-button" src={editButton} alt="Кнопка редактирования фотографии профиля" />
                <div className="profile__info">
                    <div className="profile__title-button">
                        <h1 className="profile__info-title">{name}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button" ></button>
                    </div>
                    <p className="profile__info-subtitle">{about}</p>
                </div>
            </div>
            <button type="button" onClick={props.onAddPlace} onClose={props.onClose} className="profile__add-button"></button>
        </section>
        <section className = "gridImages">
            <ul className="elements">
                {cards && cards.map((card) => <Card  key={card._id} 
                            {...card}
                            onCardClick={(linkCard) => props.handleCardClick(linkCard)} 
                            onCardLike={(card) => props.onCardLike(card)}
                            onCardDelete={(card) => props.onCardDelete(card)}                            
                            />)}
            </ul>
        </section>
    </main>
    );
}

export default Main;