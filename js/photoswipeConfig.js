var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [


{ src: 'images/g2/Dachboden_S 44.jpg', w: 410, h: 640 },
{ src: 'images/g2/FullSizeRender (3).jpg', w: 460, h: 640 },
{ src: 'images/g2/FullSizeRender (6).jpg', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (9).jpg', w: 640, h: 460 },
{ src: 'images/g2/IMG_0887.JPG', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (1).jpg', w: 462, h: 640 },
{ src: 'images/g2/FullSizeRender (4).jpg', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (7).jpg', w: 640, h: 460 },
{ src: 'images/g2/IMG_0793.JPG', w: 640, h: 460 },
{ src: 'images/g2/IMG_9334.JPG', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (2).jpg', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (5).jpg', w: 640, h: 460 },
{ src: 'images/g2/FullSizeRender (8).jpg', w: 460, h: 640 },
{ src: 'images/g2/IMG_0881.JPG', w: 640, h: 460 },
{ src: 'images/g2/Katze Murka_S 10.jpg', w: 672, h: 962 }

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