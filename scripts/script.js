$(document).ready(function() {

const body = $('body');
const burger = $('#burger');
const sidebar = $('.sidebar');
const menuclose = $('#close');
const showMore = $('.show-more');
const loader = $('.loader');

const buttonExcursion = $('.button-excursion');
const popup = $('.popup');
const popupClose = $('#popup-close');
const popupContainer =  $('.popup-container');

const name = $('#order-input-name');
const phone = $('#order-input-phone');
const nameErr = $('.order-err-name');
const phoneErr = $('.order-err-phone');
const checkboxErr = $('.order-err-checkbox');
const orderButton = $('#order-button');
const checkboxInput = $('.order-input-checkbox');
const checkbox = $('.order-checkbox');
const thanksOrder = $('.thanks-order');

const namePopup = $('#popup-input-name');
const phonePopup = $('#popup-input-phone');
const nameErrPopup = $('.popup-err-name');
const phoneErrPopup = $('.popup-err-phone');
const checkboxErrPopup = $('.popup-err-checkbox');
const ButtonPopup = $('#popup-button');
const checkboxInputPopup = $('.popup-input-checkbox');
const checkboxPopup = $('.popup-checkbox');
const thanksPopup = $('#thanks-popup');
const popupInfo = $('.popup-info');

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();


// скачивание pdf
let garantURL = 'https://ngnova.ru/upload/iblock/9c2/Proekt-dogovora.pdf';
let progect1URL = 'https://www.sklad-kirpicha.ru/upload/iblock/574/bb362ii3tfrtdklsiualqks31vh1mbhv.pdf';
let progect2URL = 'https://modul-company.com/upload/app_pages/pdf_projects/mc_aac_01.pdf';
let progect3URL = 'https://sdsdom.ru/sites/default/files/download/constructive_solution.pdf';
let progect4URL = 'https://reliton.ru/wp-content/uploads/2020/07/ar_primer.pdf'
let progect5URL = 'https://fhcdnstock-a.akamaihd.net/1676123/original_file.pdf';
const pdfButton = $('.project-pdf-button');
let pdfButtonURL = [progect1URL, progect2URL, progect3URL, progect4URL, progect5URL, garantURL];

    for (let i = 0; i < pdfButton.length; i++) {
        pdfButton.eq(i).on('click', function () {
            let link = document.createElement('a');
            link.href = "";
            link.download = pdfButtonURL[i];
            link.click();
            link.remove();
        })
    }


// скроллы до формы
$('.contacts-text').on('click', function () {
    $('#order')[0].scrollIntoView({behavior: "smooth"});
    });
$('.about-button').on('click', function () {
    $('#order')[0].scrollIntoView({behavior: "smooth"});
    });
$('.project-button-scroll').on('click', function () {
    $('#order')[0].scrollIntoView({behavior: "smooth"});
    });


//открытие и закрытие меню
burger.on('click', function () {
    sidebar.css('left', '0');
})
menuclose.on('click', sidebarClose);

($(!sidebar)).on('click', sidebarClose);

$('.menu-item').on('click', sidebarClose);

body.on('click', function (evt) {
    if (parseInt(sidebar.css('left')) === 0 && !$(evt.target).is('.sidebar')) {
        sidebarClose();
    }
});

function sidebarClose() {
    if (parseInt(window.screen.width) > 1125) {
        sidebar.css('left', '-32%');
    } else if (parseInt(window.screen.width) > 767) {
        sidebar.css('left', '-45%');
    } else if (767 >= parseInt(window.screen.width) > 510) {
        sidebar.css('left', '-60%');
    }else  {
        sidebar.css('left', '-100%');
    }
}


// popup открытие
buttonExcursion.on('click', function () {
popup.css('display', 'block');
});

body.on('click', function () {
    popup.css('display', 'none');
});
popupContainer.click(function(e){
    e.stopPropagation();
});
buttonExcursion.click(function(e){
    e.stopPropagation();
});

popupClose.on('click', function () {
    popup.css('display', 'none');
});


// Открытие скрытых проектов
const projectHidden = $('.project-hidden')
showMore.on('click', function () {

    if (showMore.children().eq(0).text() === 'Посмотреть ещё 3 проекта') {
        projectHidden.css('display', 'grid');
        showMore.children().eq(0).text('Скрыть последние 3 проекта');
        showMore.children().eq(1).css('transform', 'rotate(-90deg)');
    } else {
        projectHidden.css('display', 'none');
        showMore.children().eq(0).text('Посмотреть ещё 3 проекта');
        showMore.children().eq(1).css('transform', 'rotate(90deg)');
    }
})


//открытие галереи картинок на весь экран для проектов
$('.project-images').each(function () {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


// технологии открытие или наведение в зависимости от размера экрана
const circlesAll = [$('.circle1'), $('.circle2'), $('.circle3'), $('.circle4'), $('.circle5')];
const infoAll = [$('.techno-circle-info-1'), $('.techno-circle-info-2'), $('.techno-circle-info-3'), $('.techno-circle-info-4'), $('.techno-circle-info-5')]

    console.log(window.screen.width)
if (parseInt(window.screen.width) < 1125) {
    $('.line').css('display', 'none');
    for (let i of circlesAll) {
        i.on('click', function () {
// open
            if (i.css('background-color') === 'rgb(236, 198, 107)') {
                circlesAll.forEach(function (e) {
                    e.children().css('border-color', 'rgb(236, 198, 107)');
                    e.css('background-color', 'rgb(236, 198, 107)');
                });
                infoAll.forEach(function (e) {
                    e.css('display', 'none');
                });
                i.css('background-color', '#fcedcb');
                i.children().css('border-color', '#fcedcb');
                infoAll[circlesAll.indexOf(i)].css('display', 'block');
// close
            } else {
                i.children().css('border-color', 'rgb(236, 198, 107');
                i.css('background-color', 'rgb(236, 198, 107)');
                infoAll.forEach(function (e) {
                    e.css('display', 'none');
                });
            }
        })
    }
} else {
    for (let i of infoAll) {
        i.children().on("mouseenter", function () {
            i.css('color', 'rgb(236, 198, 107)');
            circlesAll[infoAll.indexOf(i)].css('background-color', '#fcedcb').children().css('border-color', '#fcedcb');
        }).on("mouseleave", function () {
            i.css('color', 'white');
            circlesAll[infoAll.indexOf(i)].css('background-color', 'rgb(236, 198, 107)').children().css('border-color', 'rgb(236, 198, 107)');
        })
    }
}


// форма консультация
phone.inputmask({"mask": "+380 99 999 9999"});

orderButton.on('click', function () {
    nameErr.hide();
    phoneErr.hide();
    checkboxErr.hide();
    name.css('border-color', 'white');
    phone.css('border-color', 'white');
    let err = false;
    if (!name.val()) {
        name.css('border-color', '#ec6b6b');
        nameErr.show();
        err = true;
    }
    if (!phone.val()) {
        phone.css('border-color', '#ec6b6b');
        phoneErr.show();
        err = true;
    }
    if (!checkboxInput.attr('checked')) {
        checkboxErr.show();
        err = true;
    }
    if (!err) {
// //код отправки запроса
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg && (msg.success === 1)) {
                    orderButton.css('transition', 'unset').css('visibility', 'hidden');
                    phone.add(name).add(checkbox).css('visibility', 'hidden');
                    thanksOrder.show()
                    name.val('');
                    phone.val('');
                    setTimeout(function () {
                        orderButton.css('transition', 'all 1s').css('visibility', 'visible');
                        phone.add(name).add(checkbox).css('visibility', 'visible');
                        thanksOrder.hide()
                    }, 6000);
                } else {
                    alert('Ошибка данных');
                }
            });
    }
});


// форма popup
phonePopup.inputmask({"mask": "+380 99 999 9999"});

ButtonPopup.on('click', function () {
    nameErrPopup.hide();
    phoneErrPopup.hide();
    checkboxErrPopup.hide();
    namePopup.css('border-color', 'white');
    phonePopup.css('border-color', 'white');
    let err = false;
    if (!namePopup.val()) {
        namePopup.css('border-color', '#ec6b6b');
        nameErrPopup.show();
        err = true;
    }
    if (!phonePopup.val()) {
        phonePopup.css('border-color', '#ec6b6b');
        phoneErrPopup.show();
        err = true;
    }
    if (!checkboxInputPopup.attr('checked')) {
        checkboxErrPopup.show();
        err = true;
    }
    if (!err) {
// //код отправки запроса
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {name: namePopup.val(), phone: phonePopup.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg && (msg.success === 1)) {
                    ButtonPopup.css('transition', 'unset').css('visibility', 'hidden');
                    phonePopup.add(namePopup).add(popupInfo).add(checkboxPopup).css('visibility', 'hidden');

                    thanksPopup.show()
                    namePopup.val('');
                    phonePopup.val('');
                    setTimeout(function () {
                        popup.css('display', 'none');
                        ButtonPopup.css('transition', 'all 1s').css('visibility', 'visible');
                        phonePopup.add(namePopup).add(popupInfo).add(checkboxPopup).css('visibility', 'visible');
                        thanksPopup.hide()
                    }, 5000);
                } else {
                    alert('Ошибка данных');
                }
            });
    }
});



// слайдер
    const next =  $('#next');
    const prev =  $('#prev');

    $('.slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        variableWidth: true,
        nextArrow: next,
        prevArrow: prev,
        autoplay:true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

})

