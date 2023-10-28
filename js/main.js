const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const navigationLinks = document.querySelectorAll('.primary-navigation li a');
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');
const faqContainer = document.querySelector('.faq-content');

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

let splide1 = new Splide('#splide1', {
    type: 'loop',
    perPage: 4,
    snap: true,
    breakpoints: {
        900: {
            perPage: 3,
            arrows: false,
        },
        640: {
            perPage: 2,
            arrows: false,
        },
        480: {
            perPage: 1,
            arrows: false,
        },
    },
});

splide1.mount();

let splide2 = new Splide('#splide2', {
    type: 'loop',
    perPage: 4,
    snap: true,
    breakpoints: {
        640: {
            perPage: 2,
            arrows: false,
        },
        480: {
            perPage: 1,
            arrows: false,
        },
    },
});

splide2.mount();

let splide3 = new Splide('#splide3', {
    type: 'loop',
    perPage: 4,
    snap: true,
    breakpoints: {
        640: {
            perPage: 2,
            arrows: false,
        },
        480: {
            perPage: 1,
            arrows: false,
        },
    },
});

splide3.mount();

// FAQ ACCORDION

document.addEventListener('DOMContentLoaded', () => {

    faqContainer.addEventListener('click', (e) => {
        const groupQuestion = e.target.closest('.faq-question');

        if (!groupQuestion) return;

        const group = groupQuestion.parentElement;
        const groupAnswer = group.querySelector('.faq-answer');
        const icon = groupQuestion.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-caret-down');
        icon.classList.toggle('fa-caret-up');

        groupAnswer.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupAnswer = otherGroup.querySelector('.faq-answer');
                const otherIcon = otherGroup.querySelector('.faq-question i');

                otherGroupAnswer.classList.remove('open');
                otherIcon.classList.remove('fa-caret-up');
                otherIcon.classList.add('fa-caret-down');
            }
        });
    });
});