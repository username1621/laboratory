import  "react";
import './style.css';
import im2 from './image/icons8-твиттер-30.png';
import im1 from './image/icons8-телеграмма-app-50.png';
import im3 from './image/icons8-почта-30.png';
import im4 from './image/icons8-facebook-новый-30.png';
import im5 from './image/icons8-телефон-50.png';
const Footer = () => {
    function handleClick(sectionName) {
        alert(`Раздел "${sectionName}" недоступен!`);
    }
    return (
        <footer>
            <h1 id="information">Информация</h1>
            <h1 id="contacts">Контакты</h1>
            <h1><span>Mobile</span><span>Store</span></h1>
            <img src={im2} id="img1"/>
            <img src={im1} id="img2"/>
            <img src={im4} id="img3"/>
            <p id="p1"><img src={im3} id="img5"/>example@mail.ru</p>
            <p id="p2"><img src={im5} id="img4"/> +7 999 999-99-99</p>
            <p id="p3"><a href="#example.com/1" className="nav-item" onClick={() => handleClick('О нас')}>О нас</a></p>
            <p id="p4"><a href="#example.com/1" className="nav-item" onClick={() => handleClick('Доставка')}>Доставка</a> и
                <a href="#example.com/2" className="nav-item" onClick={() => handleClick('Оплата')}> оплата</a>
            </p>
        </footer>
    )
}
export default Footer;