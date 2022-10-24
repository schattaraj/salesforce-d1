const ProjectPath = '';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function(){
    let date = new Date();
$('#year').html(date.getFullYear());
feather.replace();
});
$(".owl-carousel.team").owlCarousel({
    loop:!0,
    margin:20,
    nav:!1,
    dots:true,
    autoplay:!0,  
    responsive:{
        0:{items:1},
        768:{items:2},
        1000:{items:3}
}});
$('.owl-carousel.services').owlCarousel({
    loop:true,
    margin:32,
    nav:true,
    navText:['<i data-feather="chevron-left"></i>','<i data-feather="chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.owl-carousel.clients').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:false,
    navText:['<i data-feather="arrow-left"></i>','<i data-feather="arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
var owl = $('.owl-carousel.clients'); 
$('.custom-button .prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]); 
    checkDisabled();
});
// Go to the previous item
$('.custom-button .next').click(function() {
    owl.trigger('next.owl.carousel'); 
    checkDisabled();
});
checkDisabled();
function checkDisabled(){
let owlprev = $('.owl-nav .owl-prev').hasClass('disabled');
let owlnext = $('.owl-nav .owl-next').hasClass('disabled');
if(owlprev){
    $('.custom-button .prev').addClass('disabled');
    $('.custom-button .next').removeClass('disabled');
}
if(owlnext){
    $('.custom-button .next').addClass('disabled');
    $('.custom-button .prev').removeClass('disabled');
}
}
// window.addEventListener('focus', function(){
//     if(location.host == "localhost:3000"){
//         location.reload();
//     }
//     }, false);
   
    console.log(location.host);
  var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 400,
    loop: true,
  });
   new Typed('.typed2', {
    stringsElement: '.typed-strings2',
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 400,
    loop: true,
  });
  new Typed('.typed3', {
    stringsElement: '.typed-strings3',
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 400,
    loop: true,
  });
 //wow js
 var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  AOS.init();