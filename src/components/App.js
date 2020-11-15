import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import '../index.css';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () =>{
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }
    
    return (
    <>
    <Header />   
    <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        selectedCard={selectedCard}
        onClose={closeAllPopups}
    />
    <Footer />
    <PopupWithForm 
        name='edit-avatar' 
        title='Обновить аватар' 
        idButton='loadAvatar' 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
    />

    <PopupWithForm 
        name='confirm' 
        title='Вы уверены?' 
        idButton='delete' 
    />

    <PopupWithForm 
        name='edit-form' 
        title='Редактировать профиль' 
        idButton='saveEditForm' 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
    />

    <PopupWithForm 
        name='add-card' 
        title='Новое место' 
        idButton='saveButtonAddCard' 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
    />

    <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}/>   
    </>
  );
}

export default App;
