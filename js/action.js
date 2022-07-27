const anime = document.querySelectorAll('.animesection');
const animeChild = document.querySelectorAll('.animesection #line-art-1 div');
const animeChild2 = document.querySelectorAll('.animesection #line-art-2 div');
const animeChild3 = document.querySelectorAll('.animesection #line-art-3 div');
const subanim = document.querySelectorAll('.sub-section div');

let scrollAnimation = () => {
    if (anime[0].getBoundingClientRect().top > screen.height / 2 || anime[0].getBoundingClientRect().bottom < 0) {
        animeChild[0].style.height = "0px";
        animeChild[1].style.transform = "scale(0)";
        animeChild[2].style.transform = "scale(0)";
        animeChild[3].style.transform = "scale(0)";
        subanim[0].style.transform = "scaleX(1)";
        subanim[1].style.transform = "scaleX(1)";
        subanim[2].style.transform = "scaleX(1)";
    } else {
        animeChild[0].style.height = "60%";
        animeChild[1].style.transform = "scale(1)";
        animeChild[2].style.transform = "scale(1)";
        animeChild[3].style.transform = "scale(1)";
        subanim[0].style.transform = "scaleX(0)"
        subanim[1].style.transform = "scaleX(0)";
        subanim[2].style.transform = "scaleX(0)";

    }

    if (anime[1].getBoundingClientRect().top > screen.height / 2 || anime[1].getBoundingClientRect().bottom < 0) {
        animeChild2[0].style.height = "0px";
        animeChild2[1].style.transform = "scale(0)";
        animeChild2[2].style.transform = "scale(0)";
        animeChild2[3].style.transform = "scale(0)";
        subanim[3].style.transform = "scaleX(1)";
        subanim[4].style.transform = "scaleX(1)";
        subanim[5].style.transform = "scaleX(1)";
    } else {
        animeChild2[0].style.height = "65%";
        animeChild2[1].style.transform = "scale(1)";
        animeChild2[2].style.transform = "scale(1)";
        animeChild2[3].style.transform = "scale(1)";
        subanim[3].style.transform = "scaleX(0)";
        subanim[4].style.transform = "scaleX(0)";
        subanim[5].style.transform = "scaleX(0)";
    }

    if (anime[2].getBoundingClientRect().top > screen.height / 2 || anime[2].getBoundingClientRect().bottom < 0) {
        animeChild3[0].style.height = "0px";
        animeChild3[1].style.transform = "scale(0)";
        animeChild3[2].style.transform = "scale(0)";
        subanim[6].style.transform = "scaleX(1)";
        subanim[7].style.transform = "scaleX(1)";

    } else {
        animeChild3[0].style.height = "75%";
        animeChild3[1].style.transform = "scale(1)";
        animeChild3[2].style.transform = "scale(1)";
        subanim[6].style.transform = "scaleX(0)";
        subanim[7].style.transform = "scaleX(0)";

    }
}

/* carousel scripts */
$(document).ready(function () {
    $('#ui-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('#illustration-carousel ,#iso-carousel, #magzine-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



});





/* popup magnifier */
$(document).ready(function () {

    $('#ui-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });

    $('#illustration-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });

    $('#iso-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });


    $('#logo-banner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });


    $('#print-media').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });

    $('#magzine-carousel').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });

    $('#web-templates').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by chiranjeev mohanty</small>';
            }
        }
    });


});

