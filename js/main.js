const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const navigationLinks = document.querySelectorAll('.primary-navigation li a');
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

// Stop Animations During Window Resizing 

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
// LANGUAGE SELECTOR

dropBtn.addEventListener('click', () => {
    dropDownContent.classList.toggle('open');
});

// document.addEventListener('click', (event) => {
//     const targetElement = event.target;
//     if (!targetElement.closest('.dropdown')) {
//         dropDownContent.classList.remove('open');
//     }
// });

const changeLanguage = (language) => {
    document.getElementById("selectedLanguage").innerHTML = `<img src="images/countries/${language}.png" alt="${language}" />`;
    dropDownContent.classList.remove('open'); // Close the dropdown after selection
};

//Focus input on button click

searchButton.addEventListener('click', () => {
    searchInput.focus();
});


// ADD PSEUDO ELEMENT AND ACTIVE CLASS TO CLICKED LINK ON NAVBAR

navigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove 'active' class from all links
        navigationLinks.forEach(item => {
            item.classList.remove('active');
        });
        // Add 'active' class to the clicked link
        e.target.classList.add('active');
    });
});

// MOBILE MENU

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const iconElement = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false" || visibility === null) {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        iconElement.className = "fa-solid fa-xmark fa-2xl";
    } else {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        iconElement.className = "fa-solid fa-bars fa-2xl";
    }
});

// SLIDER

let swiper1 = new Swiper(".swiper1", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let swiper2 = new Swiper(".swiper2", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
    },
});

let swiper3 = new Swiper(".swiper3", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3",
    },
    pagination: {
        el: ".swiper-pagination-3",
        clickable: true,
    },
});

