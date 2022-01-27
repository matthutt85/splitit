const tipButton = document.querySelector(".content_button");
const closeButton = document.querySelector(".content_popup--selector--close");

const closePopup = () => {
    document.querySelector(".content_popup").style.display = "none";
}

const displayPopup = () => {
    document.querySelector(".content_popup").style.display = "flex";
}

tipButton.addEventListener('click', (displayPopup));
closeButton.addEventListener('click', (closePopup));


