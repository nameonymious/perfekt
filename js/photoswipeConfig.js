var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        { src: 'images/g1/DSC_0561.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0839.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0867.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0914.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0931.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_1004.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0292.jpg', w: 1715, h: 1139 },        
        { src: 'images/g1/DSC_0653.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0840.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0885.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0922.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0933.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0910.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0864.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0799.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0492.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0930.jpg', w: 1715, h: 1139 },
        { src: 'images/g1/DSC_0982.jpg', w: 1715, h: 1139 }
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