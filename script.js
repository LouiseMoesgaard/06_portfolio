window.addEventListener("load", function () {
    if (window.screen.availWidth >= 600) {
        document.querySelector("#sub_menu").classList.add("hide");
    }
});

window.addEventListener('resize', function () {
    if (window.screen.availWidth >= 600) {
        document.querySelector("#sub_menu").classList.add("hide");
    } else {
        document.querySelector("#sub_menu").classList.remove("hide");
    }
});


document.querySelector(".nav_btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("hide")
})

document.querySelector(".close_menu").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("hide")
})

document.querySelector("#port_btn").addEventListener("click", function () {
    if (window.screen.availWidth >= 600) {
        document.querySelector("#sub_menu").classList.toggle("hide");

    }
})


let slideIndex = 0;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let slideContainer = document.querySelector(".slides");
    if (n > slides.length - 1) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slideContainer.className = "slides";
    slideContainer.classList.add("slide" + slideIndex);
}


let colapse_btn = document.querySelectorAll(".colapse_btn");

for (let index = 0; index <= colapse_btn.length - 1; index++) {
    colapse_btn[index].addEventListener("click", function () {
        this.classList.toggle("open");
    });
}
