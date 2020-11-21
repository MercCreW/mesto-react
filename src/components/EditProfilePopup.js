import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props){
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);

    function handleChangeName(e) {
        e.preventDefault();
        setName(e.target.value);
      }

    function handleChangeAbout(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name,
          about: description,
        });
      } 


    
    return(
        <PopupWithForm 
        name='edit-form' 
        title='Редактировать профиль' 
        idButton='saveEditForm' 
        isOpen={props.isOpen} 
        onClose={props.onClose} 
        buttonText='Сохранить'
        onSubmit={handleSubmit}
    >
        <input 
            type="text"
            name="input-name"
            value={name}
            onChange={handleChangeName}
            className="modal__input modal__input_type_name"
            required
            minLength="2"
            maxLength="40" />
        <span className="modal__error" id="input-name-error"></span>
        <input
            type="text"
            name= "input-profession"
            value={description}
            onChange={handleChangeAbout}
            className="modal__input modal__input_type_about-myself"
            required 
            minLength="2"
            maxLength="200" />
        <span className="modal__error" id="input-profession-error"></span>
    </PopupWithForm>
    );
}

export default EditProfilePopup;