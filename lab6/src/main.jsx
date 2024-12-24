import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header.jsx';
import Footer from './footer.jsx';
import ProductSlider from './App.jsx';
import State from './State.jsx';
import J from './j.jsx'
import './index.css'
import './style.css'
import Apple from './image/Apple14.jpg';
import Fold from './image/fold2.png';
import Honor from './image/honorv3.png';
import Samsung from './image/samsungS24.jpg';
import Xiaomi from './image/xiaomi14t.png';
const handleSubmit = (event) => {
    event.preventDefault(); // Отменяем отправку формы
    alert('Функция поиска на данный момент недоступна!');
};
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <h2>Новинки</h2>
        <ProductSlider products={[
            {
                title: 'Смартфон Apple IPhone 14 Pro Max 256Gb, золотой',
                image: Apple,
                link: '#',
                discount: '-10%',
                discountedPrice: '135 000',
                originalPrice: '150 000',
            },
            {
                title: 'Смартфон TECNO Phantom V Fold 2 5G 12/512GB, Karst Green!',
                image: Fold,
                link: '#',
                discount: '-20%',
                discountedPrice: '119 999',
                originalPrice: '149 999',
            },
            {
                title: 'Смартфон HONOR Magic V3 512GB Черный EAC!',
                image: Honor,
                link: '#',
                discount: '-10%',
                discountedPrice: '170 999',
                originalPrice: '189 999',
            },
            {
                title: 'Смартфон Samsung Galaxy S24 FE 256GB Серый EAC!',
                image: Samsung,
                link: '#',
                discount: '-10%',
                discountedPrice: '62 999',
                originalPrice: '69 999',
            },
            {
                title: 'Смартфон Xiaomi 14T 12GB/256GB, Titan Black!',
                image: Xiaomi,
                link: '#',
                discount: '-10%',
                discountedPrice: '47 699',
                originalPrice: '52 999',
            }
        ]}/>
        <h2>Акция</h2>
        <ProductSlider products={[
            {
                title: 'Смартфон Apple IPhone 14 Pro Max 256Gb, золотой',
                image: Apple,
                link: '#',
                discount: '-10%',
                discountedPrice: '135 000',
                originalPrice: '150 000',
            },
            {
                title: 'Смартфон TECNO Phantom V Fold 2 5G 12/512GB, Karst Green!',
                image: Fold,
                link: '#',
                discount: '-20%',
                discountedPrice: '119 999',
                originalPrice: '149 999',
            },
            {
                title: 'Смартфон HONOR Magic V3 512GB Черный EAC!',
                image: Honor,
                link: '#',
                discount: '-10%',
                discountedPrice: '170 999',
                originalPrice: '189 999',
            },
            {
                title: 'Смартфон Samsung Galaxy S24 FE 256GB Серый EAC!',
                image: Samsung,
                link: '#',
                discount: '-10%',
                discountedPrice: '62 999',
                originalPrice: '69 999',
            },
            {
                title: 'Смартфон Xiaomi 14T 12GB/256GB, Titan Black!',
                image: Xiaomi,
                link: '#',
                discount: '-10%',
                discountedPrice: '47 699',
                originalPrice: '52 999',
            }
        ]}/>
        <h2>Узнавайте первыми об акциях</h2>
        <form action="/" method="post" id="searchForm1" onSubmit={handleSubmit}>
            <input type="text" placeholder="Мой e-mail"></input>
            <button type="submit">Подписаться</button>
        </form>
        <h2>Полезные статьи</h2>
        <J />
        <Footer/>
        <State />
    </StrictMode>,
)




