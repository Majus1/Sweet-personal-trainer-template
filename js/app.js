// Simple hello messake
console.log("hello ninja turtles");

// Setting up Owl caorusel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1200: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    })
});
// Setting up Owl caorusel

// Stylingy Owl carousel
var testimonials = document.querySelectorAll(".item")

for (let z = 0; z < testimonials.length; z++) {
    testimonials[z].classList.add("py-4")
    testimonials[z].classList.add("px-3")
}
// Stylingy Owl carousel