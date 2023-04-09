let profilElement = document.querySelector('.profile');
let popupElement = document.querySelector('.popup');
let popupContent = popupElement.querySelector('.popup__container');
let popupCloseButton = popupElement.querySelector('.popup__close');
let popupOpenButton = profilElement.querySelector('.profile__edit-button');
let profilName = profilElement.querySelector('.profile__name');
let profilJob = profilElement.querySelector('.profile__description');
let form = document.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.popup__input_type-name');
let jobInput = popupElement.querySelector('.popup__input_type-job');

function handleFormSubmit(evt) {
   evt.preventDefault();
   profilName.textContent = nameInput.value;
   profilJob.textContent = jobInput.value;
   closePopup();
};

function copyProfilEdit() {
   nameInput.value = profilName.textContent;
   jobInput.value = profilJob.textContent;
};

const openPopup = function () {
   copyProfilEdit();
   popupElement.classList.add('popup_opened');
};

const closePopup = function () {
   popupElement.classList.remove('popup_opened');
};

form.addEventListener('submit', handleFormSubmit);
popupCloseButton.addEventListener('click', closePopup);
popupOpenButton.addEventListener('click', openPopup);


