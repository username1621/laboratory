import  'react';
import './style.css';
import im2 from './image/2.png';
import im1 from './image/1.png';
import favourites from './image/icons8-избранное-50.png';
import menu from './image/icons8-меню-50.png';
import search from './image/icons8-поиск-50.png';
const Header = () => {
    function handleClick(sectionName) {
        alert(`Раздел "${sectionName}" недоступен!`);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // Отменяем отправку формы
        alert('Функция поиска на данный момент недоступна!');
    };
    return (
        <header>
            <p>
                <a href="#example.com/1" className="nav-item"
                   style={{position: 'absolute', right: '650px', top: '22px'}} onClick={() => handleClick('Доставка')}>Доставка</a>
                <a href="#example.com/2" className="nav-item"
                   style={{position: 'absolute', right: '850px', top: '22px'}} onClick={() => handleClick('Оплата')}>Оплата</a>
                <a href="#example.com/3" className="nav-item"
                   style={{position: 'absolute', right: '60px', top: '22px'}} onClick={() => handleClick('Вход/Регистрация')}>
                    <img src={im2} alt=""/> Вход/Регистрация
                </a>
            </p>
            <h1><span>Mobile</span><span>Store</span></h1>
            <p>
                <a href="#example.com/4" className="nav-item"
                   style={{position: 'absolute', right: '260px', top: '65px'}} onClick={() => handleClick('Корзина')}>
                    <img src={im1} alt=""/> Корзина
                </a>
                <a href="#example.com/5" className="nav-item"
                   style={{position: 'absolute', right: '60px', top: '65px'}} onClick={() => handleClick('Избранное')}>
                    <img src={favourites} alt=""/> Избранное
                </a>
            </p>
            <nav role="navigation">
                <ul>
                    <li>
                        <a href="#" >
                            <img src={menu} style={{width: '20px', height: '20px'}} alt=""/> Каталог
                        </a>
                        <ul>
                            <li><a href="#3" className="nav-item" onClick={() => handleClick('Смартфоны')}>Смартфоны</a></li>
                            <li><a href="#0" className="nav-item" onClick={() => handleClick('Наушники')}>Наушники</a></li>
                            <li><a href="#1" className="nav-item" onClick={() => handleClick('Аксессуары')}>Аксессуары</a></li>
                            <li><a href="#2" className="nav-item" onClick={() => handleClick('Умные часы')}>Умные часы</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <form id="searchForm" onSubmit={handleSubmit}>
                <input type="text" name="text" className="search" placeholder="Поиск"/>
                <button className="image-button" type="submit" >
                    <img src={search} alt=""/>
                </button>
            </form>
        </header>

    );
};
export default Header;
