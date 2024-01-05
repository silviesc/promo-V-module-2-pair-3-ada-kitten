'use strict';
const list = document.querySelector('.js-list');
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño..hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};


const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

const mayus1= kittenData_1.name.toUpperCase();
const mayus2= kittenData_2.name.toUpperCase();
const mayus3= kittenData_3.name.toUpperCase();

const buttonCancel = document.querySelector('.js-btn-cancel');
const formSection = document.querySelector('.js-new-form');

buttonCancel.addEventListener('click', ()=> {
  formSection.classList.add('collapsed');
})

const linkNewFormElement= document.querySelector('.item');

function showNewCatForm() {
  formSection.classList.remove('collapsed');
}
function hideNewCatForm() {
 formSection.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains('collapsed')) {
    return showNewCatForm();
  } else {
    return  hideNewCatForm();
  }
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);


//modifica el evento para cumplir una función manejadora

const buttonAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

function addNewKitten(event) {
  event.preventDefault();
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  }
}

buttonAdd.addEventListener('click', addNewKitten);


//filtrar por descripción - 3 enero
const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

function filterKitten (event) {
  event.preventDefault();
  list.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  // const descrSearchRace = input_search_race.value; 
  if (kittenDataList[0].desc.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenDataList[0]);
    
  }
   if (kittenDataList[1].desc.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenDataList[1]);
  }
   if (kittenDataList[2].desc.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenDataList[2]);
  }
  // if (descrSearchText === '' || descrSearchRace === '' ) {
  //   labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  // }
  //pdte de revisar la validacion del search
};
buttonSearch.addEventListener('click', filterKitten);



//objetos- 04-01-24


function renderKitten(kittenData) {
  const html= `<li class="card">
  <img
    class="card_img"
    src= "${kittenData.image}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title"> ${kittenData.name} </h3>
  <h4 class="card_race">${kittenData.race}</h4>
  <p class="card_description">
  ${kittenData.desc}
  </p>
  </li>`;
return html;
}

//arrays 05-01-24

list.innerHTML= renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);

