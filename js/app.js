// Simple hello messake
console.log("hello ninja turtles");

// Setting up Owl caorusel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:2,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})