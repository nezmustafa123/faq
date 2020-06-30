// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


//select button and video


const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    //move slide switch to left
    if(!btn.classList.contains('slide')){
        //if btn does not include classList
        btn.classList.add('slide');
        //if doesn't have slide class pause video
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        video.play();
    }
});


//preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
     preloader.classList.add('hide-preloader');
})



