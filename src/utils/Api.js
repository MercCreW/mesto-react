import { inputLink } from "../utils/constants";

class Api{
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkStatus)
    }
    
    getUserInfo() {
        return fetch(
            `${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkStatus)
    }

    setUserInfo(userInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: userInfo.userName,
                about: userInfo.userJob
            })
        }
        )
        .then(this._checkStatus)
    }

    editUserInfo(editName, editInfo){
        return fetch(
            `${this._baseUrl}/users/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: editName,
                    about: editInfo
                })
            }
        )
            .then(this._checkStatus)    
    }

    addNewCard(cardName, cardLink){
        return fetch(
            `${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })
        })
        .then(this._checkStatus)
    }

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkStatus);
    }
    
    unlikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkStatus);
    }

    patchNewAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: link
                })
        })
            .then(this._checkStatus);
    }

    deleteCard(itemId) {
        return fetch(`${this._baseUrl}/cards/${itemId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkStatus);
    }
}

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16",
    headers: {
      authorization: "94eaa851-634c-434c-a23c-4aeaaa34181d",
      'Content-Type': 'application/json'
    },
  });

export default api;