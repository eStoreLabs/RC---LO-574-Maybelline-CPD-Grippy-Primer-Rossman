(() => {
    const mobileSwiper = new Swiper('.es-swiper-mobile', {
        loop: true,
        autoHeight: false,
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        },
        pagination: {
        el: '.es-swiper-mobile-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.es-swiper-mobile-next',
        prevEl: '.es-swiper-mobile-prev',
        },
    });

    const desktopSwiper = new Swiper('.es-swiper-desktop', {
            loop: true,
            autoHeight: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
            pagination: {
            el: '.es-swiper-desktop-pagination',
            clickable: true,
        },
            navigation: {
            nextEl: '.es-swiper-desktop-next',
            prevEl: '.es-swiper-desktop-prev',
        },
    });
})()