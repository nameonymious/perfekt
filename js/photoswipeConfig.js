var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [


        { src: 'images/photos/12039400_1503658306621821_6039414915190530904_n.jpg', w: 960, h: 960 },
        { src: 'images/photos/12043206_1503658153288503_236017261470489393_n.jpg', w: 960, h: 960 },
        { src: 'images/photos/12074626_1504762289844756_1162137757236444309_n.jpg', w: 960, h: 960 },
        { src: 'images/photos/12118817_1504762283178090_5748663463087766276_n.jpg', w: 960, h: 960 },
        { src: 'images/g2/IMG_9334.JPG', w: 640, h: 460 },

    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};

var openPhotoSwipe2 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [


        { src: 'images/photos/IMG_4221.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4222.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4232.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4236.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4238.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4240.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4251.JPG', w: 2448, h: 2448 },
        { src: 'images/photos/IMG_4315.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4337.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4342.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4343.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4349.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4350.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4353.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4359.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_4493.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4494.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4495.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4496.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4498.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4499.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4534.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4535.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4537.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4539.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4541.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4542.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4543.JPG', w: 640, h: 640 },
        { src: 'images/photos/IMG_4544.JPG', w: 640, h: 640 },
        { src: 'images/photos/FullSizeRender2.jpg', w: 640, h: 640 },
        { src: 'images/photos/FullSizeRender3.jpg', w: 640, h: 640 },
        { src: 'images/photos/FullSizeRender4.jpg', w: 640, h: 640 },
        { src: 'images/photos/FullSizeRender.jpg', w: 640, h: 640 },
        { src: 'images/photos/IMG_4362.JPG', w: 640, h: 480 },
        { src: 'images/photos/IMG_4363.JPG', w: 640, h: 480 },
        { src: 'images/photos/IMG_4364.JPG', w: 640, h: 480 },
        { src: 'images/photos/IMG_4365.JPG', w: 640, h: 480 },
        { src: 'images/photos/IMG_8282.JPG', w: 3264, h: 2448 },
        { src: 'images/photos/IMG_8308.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_8313.JPG', w: 3264, h: 2448 },
        { src: 'images/photos/IMG_8315.JPG', w: 3264, h: 2448 },
        { src: 'images/photos/IMG_8318.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_8326.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_8455.JPG', w: 2448, h: 3264 },
        { src: 'images/photos/IMG_8456.JPG', w: 3264, h: 2448 },





    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};

$(".openGallery1").click(function(){
    openPhotoSwipe();
});

$(".openGallery2").click(function(){
    openPhotoSwipe2();
});