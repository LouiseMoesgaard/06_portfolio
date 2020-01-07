let menu = document.querySelector(".menu");
let submenu = document.querySelector("#sub_menu");

window.addEventListener("load", function () {
    if (window.screen.availWidth <= 600) {
        submenu.classList.remove("hide");
    }
});

window.addEventListener('resize', function () {
    if (window.screen.availWidth >= 600) {
        submenu.classList.add("hide");
    } else {
        submenu.classList.remove("hide");
    }
});


document.querySelector(".nav_btn").addEventListener("click", function () {
    menu.classList.remove("hide")
})

document.querySelector(".close_menu").addEventListener("click", function () {
    menu.classList.add("hide")
})

document.querySelector("#port_btn").addEventListener("click", function (event) {
    if (window.screen.availWidth >= 600) {
        event.preventDefault();
        submenu.classList.toggle("hide");

    }
})

document.addEventListener("click", function (e) {
    if (!submenu.classList.contains("hide")) {
        if (window.screen.availWidth >= 600) {
            if (!e.target.matches("#sub_menu") && !e.target.matches("#sub_menu li a") && !e.target.matches("#port_btn")) {
                submenu.classList.add("hide");
            }
        } else {
            if (!e.target.matches(".fas.fa-bars") && !e.target.matches(".nav_btn")) {
                menu.classList.add("hide");
            }
        }
    }
});


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
        let icon = this.querySelector("i");
        if (icon.classList.contains("fa-angle-down")) {
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
        } else {
            icon.classList.remove("fa-angle-up");
            icon.classList.add("fa-angle-down");
        }
    });
}
