import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <header className ="header">
      <img className = "header__logo" src={"./images/header-logo.svg"} alt="Логотип два слова. Место.Россия. В белом исполнении." />
      </header>
      <main className="content">
        <section className="profile">
            <div className ="profile__card">
                <img className="profile__avatar" src={"./images/profile-avatar.jpg"} alt="Исследователь океана Жак Ив Кусто" />
                <img className="profile__avatar-edit-button" src={"./images/profile__avatar-edit-button.png"} alt="Кнопка редактирования фотографии профиля" />
                <div className="profile__info">
                    <div className="profile__title-button">
                        <h1 className="profile__info-title">Жак Ив Кусто</h1>
                        <button type="button" className="profile__edit-button"></button>
                    </div>
                    <p className="profile__info-subtitle">Исследователь океана</p>
                </div>
            </div>
            <button type="button" className="profile__add-button"></button>
        </section>
        <section className = "gridImages">
            <ul className="elements">
            </ul>
        </section>
    </main>
    <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    </>
  );
}

export default App;
