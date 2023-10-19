const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');

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
