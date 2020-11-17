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
        buttonText='Сохранить'
        >
            <input
                type="url"
                name= "input-avatar"
                class="modal__input modal__input_type_link"
                placeholder="Ссылка на картинку"
                required />
            <span class="modal__error" id="input-avatar-error"></span>
    </PopupWithForm>


    <PopupWithForm 
        name='confirm' 
        title='Вы уверены?' 
        idButton='delete' 
        buttonText='Сохранить'
    />

    <PopupWithForm 
        name='edit-form' 
        title='Редактировать профиль' 
        idButton='saveEditForm' 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        buttonText='Сохранить'
    >
        <input 
            type="text"
            name="input-name"
            value=" "
            class="modal__input modal__input_type_name"
            required
            minLength="2"
            maxLength="40" />
        <span class="modal__error" id="input-name-error"></span>
        <input
            type="text"
            name= "input-profession"
            value=" "
            class="modal__input modal__input_type_about-myself"
            required minlength="2"
            maxLength="200" />
        <span class="modal__error" id="input-profession-error"></span>
    </PopupWithForm>

    <PopupWithForm 
        name='add-card' 
        title='Новое место' 
        idButton='saveButtonAddCard' 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
        buttonText='Добавить'
    >
        <input
            type="text"
            name="input-tittle"
            class="modal__input modal__input_type_title"
            placeholder="Название"
            required
            minLength="1"
            maxLength="30" />
        <span class="modal__error" id="input-tittle-error"></span>
        <input
            type="url"
            name= "input-link"
            class="modal__input modal__input_type_link"
            placeholder="Ссылка на картинку"
            required />
        <span class="modal__error" id="input-link-error"></span>
    </PopupWithForm>

    <ImagePopup 
        onClose={closeAllPopups}
        card={selectedCard}/>   
    </>
  );
}

export default App;
