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
