const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const navigationLinks = document.querySelectorAll('.primary-navigation li a');

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
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        iconElement.className = "fa-solid fa-xmark fa-2xl";
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        iconElement.className = "fa-solid fa-bars fa-2xl";
    }
});

// Stop Animations During Window Resizing 

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});