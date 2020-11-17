import React from 'react';
import editButton from '../images/profile__avatar-edit-button.png';
import api from '../utils/Api';
import Card from '../components/Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=>{
        api.getUserInfo()
        .then((userData) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err));
    },[]);

    React.useEffect(()=>{
        api.getInitialCards()
        .then((userCards)=>{
            console.log(userCards);
            setCards(userCards)
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <main className="content">
        <section className="profile">
            <div className ="profile__card">
                <img className="profile__avatar" src={userAvatar} alt="Исследователь океана Жак Ив Кусто" />
                <img onClick={props.onEditAvatar } className="profile__avatar-edit-button" src={editButton} alt="Кнопка редактирования фотографии профиля" />
                <div className="profile__info">
                    <div className="profile__title-button">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button" ></button>
                    </div>
                    <p className="profile__info-subtitle">{userDescription}</p>
                </div>
            </div>
            <button type="button" onClick={props.onAddPlace} onClose={props.onClose} className="profile__add-button"></button>
        </section>
        <section className = "gridImages">
            <ul className="elements">
                {cards.map((card) => <Card  key={card._id} 
                            {...card}
                            onCardClick={(linkCard) => props.handleCardClick(linkCard)} />)}
            </ul>
        </section>
    </main>
    );
}


// id: item._id,
// link: item.link,
// name: item.name,
// like: item.likes.length,
// onCardClick: props.handleCardClick



export default Main;