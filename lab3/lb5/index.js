/*Реализовать при выборе пункта меню выделение соответствующего раздела документа
изменением его фона.*/
$(document).ready(function() {
    $('.menu-item').click(function() {
        $(this).next('.submenu').slideToggle();
    });
    $('.submenu li').click(function() {
        $('.active').removeClass('active'); // Убираем выделение у всех
        var target = $(this).data('target'); // Получаем целевой раздел
        $(target).addClass('active'); // Выделяем его
    });
});
/*При нажатии на названии столбца таблицы реализовать выделение тенью содержимого
остальных ячеек данного столбца.*/
$(document).ready(function() {
    let currentColumn;

    $('th').click(function() {
        const index = $(this).index(); // Получаем индекс столбца

        if (currentColumn === index) {
            // Если столбец уже выделен, снимаем выделение
            $('td').removeClass('highlight');
            currentColumn = null;
        } else {
            // Снимаем выделение с предыдущего столбца
            if (currentColumn !== null) {
                $('td').removeClass('highlight');
            }
            // Устанавливаем новое выделение
            $('td').each(function() {
                if ($(this).index() === index) {
                    $(this).addClass('highlight');
                }
            });
            currentColumn = index; // Запоминаем текущий столбец
        }
    });
});

/*Нажатие на элементы страницы, описанные дескриптором <aside>, должно приводить
к перемещению содержимого этого элемента в центр экрана и анимированному
увеличению размера шрифта.*/
(function($) {
    $.fn.animateAside = function() {
        return this.each(function() {
            const $this = $(this);
            const isCentered = $this.hasClass('center');
            if (isCentered) {
                $this.removeClass('center').css('font-size', '1em'); // Вернуться на прежнее место
            } else {
                $this.addClass('center').css('font-size', '2em'); // Переместить в центр и увеличить шрифт
            }
        });
    };
}(jQuery));

$(document).ready(function() {
    $('aside').click(function() {
        $(this).animateAside(); // Вызов плагина при нажатии
    });
});

/*Логотип в шапке страницы должен при наведённом на него указателе мыши «мигать»,
меняя свою прозрачность от 0% до 50%*/
$(document).ready(function() {
    const logo = $('#logo');
    logo.mouseenter(function() {
        let id = setInterval(function () {
            logo.animate({opacity: 0.5}, 1000).animate({opacity: 0}, 1000);
        }, 500);
        logo.mouseleave(function() {
            clearInterval(id);
            logo.stop(true, true).css('opacity', '1'); // Вернуть прозрачность

        })
    });
});