const dropBtn = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
dropBtn.addEventListener('click', () => {
    dropDownContent.style.display = dropDownContent.style.display === 'block' ? 'none' : 'block';
});


const changeLanguage = (language) => {
    document.getElementById("selectedLanguage").innerHTML = `<img src="images/countries/${language}.png" alt="${language}" />`;
    dropDownContent.style.display = 'none'; // Close the dropdown after selection
};
