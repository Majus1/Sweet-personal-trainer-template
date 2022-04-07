// Setting up Owl caorusel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 2,
                nav: false
            },
            1600: {
                items: 3,
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
    testimonials[z].classList.add("testimonial_streacher")
}
// Stylingy Owl carousel