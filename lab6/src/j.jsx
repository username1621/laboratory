import "react";
import Slider from "react-slick";
import im1 from './image/img1.png'
import im2 from './image/img2.png'
import im3 from './image/img3.png'
import im4 from './image/img4.png'
import im5 from './image/img5.png'
export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className={"slide"}>
                <a href="https://journal.citilink.ru/articles/chto-oznachayut-znachki-v-verhnej-chasti-ekrana-na-android/">
                    <figure>
                        <img src={im1}/>
                        <figcaption>Что означают значки в верхней части экрана на Android</figcaption>
                    </figure>
                </a>
            </div>
            <div className={"slide"}>
                <a href="https://journal.citilink.ru/articles/smartfony-2024-goda-kotorye-mozhno-smelo-pokupat/">
                    <figure>
                        <img src={im2}/>
                        <figcaption>Смартфоны 2024 года, к которым стоит присмотреться</figcaption>
                    </figure>
                </a>
            </div>
            <div className={"slide"}>
                <a href="https://journal.citilink.ru/articles/top-5-smartfonov-do-30-tysyach-rublej-na-kotorye-stoit-obratit-vnimanie/">
                    <figure>
                        <img src={im3}/>
                        <figcaption>Топ-5 смартфонов до 30 тысяч рублей, на которые стоит обратить внимание</figcaption>
                    </figure>
                </a>
            </div>
            <div className={"slide"}>
                <a href="https://journal.citilink.ru/articles/pochemu-telefon-ne-podklyuchaetsya-k-pk-i-noutbuku/">
                    <figure>
                        <img src={im4}/>
                        <figcaption>Почему телефон не подключается к ПК и ноутбуку</figcaption>
                    </figure>
                </a>
            </div>
            <div className={"slide"}>
                <a href="https://journal.citilink.ru/articles/kak-sdelat-veb-kameru-iz-smartfona-4-prilozheniya/">
                    <figure>
                        <img src={im5}/>
                        <figcaption>Как сделать веб-камеру из смартфона: 4 полезных приложения</figcaption>
                    </figure>
                </a>
            </div>
        </Slider>
    );
}
