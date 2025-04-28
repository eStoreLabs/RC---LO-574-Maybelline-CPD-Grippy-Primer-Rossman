(() => {
    const mobileSwiper = new Swiper('#es-rc .es-swiper-mobile', {
        loop: true,
        autoHeight: false,
        autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        },
        pagination: {
        el: '#es-rc .es-swiper-mobile-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '#es-rc .es-swiper-mobile-next',
        prevEl: '#es-rc .es-swiper-mobile-prev',
        },
    });

    const desktopSwiper = new Swiper('#es-rc .es-swiper-desktop', {
            loop: true,
            autoHeight: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
            pagination: {
            el: '#es-rc .es-swiper-desktop-pagination',
            clickable: true,
        },
            navigation: {
            nextEl: '#es-rc .es-swiper-desktop-next',
            prevEl: '#es-rc .es-swiper-desktop-prev',
        },
    });
})()