let loginButton = document.querySelector('.login_button');
let loginPopup = document.querySelector('.login_popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopup.classList.toggle('show_popup');
};