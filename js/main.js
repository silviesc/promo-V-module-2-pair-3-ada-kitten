'use strict';
const list = document.querySelector('.js-list');
const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneRace = 'Siamés';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

  const mayus1= kittenOneName.toUpperCase();
  // const kittenOne = `<li class="card">
  // <article> 
  // <img
  //   class="card_img"
  //   src= "${kittenOneImage}";
  //   alt="gatito"
  // />
  // <h3 class="card_title"> ${mayus1} </h3>
  // <h4 class="card_race"> ${kittenOneRace} </h4>
  // <p class="card_description"> ${kittenOneDesc} </p>
  // </article>
  // </li>`;


  const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
  const kittenTwoName = 'Fiona';
  const kittenTwoRace = 'Sphynx';
  const kittenTwoDesc =
    'Produce fascinación y curiosidad. Exótico, raro, bello, extraño..hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';

const mayus2= kittenTwoName.toUpperCase();
// const kittenTwo = `<li class="card">
// <article> 
// <img
//   class="card_img"
//   src="${kittenTwoImage}"
//   alt="sphynx-cat"/>
// <h3 class="card_title">${mayus2} </h3>
// <h4 class="card_race"> ${kittenTwoRace}</h4>
// <p class="card_description"> ${kittenTwoDesc} </p>
// </article>
// </li>`;


  const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
  const kittenThreeName = 'Cielo';
  const kittenThreeRace = 'Maine Coon';
  const kittenThreeDesc =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';

const mayus3= kittenThreeName.toUpperCase();
// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src= ${kittenThreeImage}
//   alt="maine-coon-cat"
// />
// <h3 class="card_title"> ${mayus3} </h3>
// <h4 class="card_race">${kittenThreeRace}</h4>
// <p class="card_description">
// ${kittenThreeDesc}
// </p>
// </li>`;

// list.innerHTML = kittenOne + kittenTwo + kittenThree;

// const input_search_desc = document.querySelector('.js_in_search_desc');

// const descrSearchText = input_search_desc.value;
// if( kittenOneDesc.includes(descrSearchText) ) {
//   kittenOne.classList.remove('hidden');
// } else {
//   kittenOne.classList.add('hidden');
// }
  
// if( kittenOneDesc.includes(descrSearchText)) {
//   list.innerHTML='';
//   list.innerHTML+= kittenOne;
// } 
// if( kittenTwoDesc.includes(descrSearchText) ) {
//   list.innerHTML='';
//   list.innerHTML+= kittenTwo;
// } 
// if( kittenThreeDesc.includes(descrSearchText) ) {
//   list.innerHTML='';
//   list.innerHTML+= kittenTwo;
// }



const buttonCancel = document.querySelector('.js-btn-cancel');
const formSection = document.querySelector('.js-new-form');

buttonCancel.addEventListener('click', (event)=> {
  formSection.classList.add('collapsed');
  // const resetForm = document.querySelector('.js-form-reset');
  // resetForm.innerHTML = "holahola";
  // console.log(event.currentTarget);
})

// function showNewCatForm() {
//   newForm.classList.remove('collapsed');
// }
// function hideNewCatForm() {
//   newForm.classList.add('collapsed');
// }

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
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  }
}

buttonAdd.addEventListener('click', addNewKitten);

function renderKitten(url, desc, name, race) {
  return `<li class="card">
  <img
    class="card_img"
    src= ${url}
    alt="maine-coon-cat"
  />
  <h3 class="card_title"> ${name} </h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
  ${desc}
  </p>
  </li>`;
}

const kittenOne = renderKitten(kittenOneImage,kittenOneDesc, mayus1, kittenOneRace);
const kittenTwo = renderKitten(kittenTwoImage,kittenTwoDesc, mayus2, kittenTwoRace);
const kittenThree = renderKitten(kittenThreeImage,kittenThreeDesc, mayus3, kittenThreeRace);

list.innerHTML= kittenOne + kittenTwo + kittenThree;

//filtrar por descripción - 3 enero
const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');

const filterKitten = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  if (kittenOneDesc.includes(descrSearchText)) {
    list.innerHTML += kittenOne;
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    list.innerHTML += kittenTwo;
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    list.innerHTML += kittenThree;
  }
};
buttonSearch.addEventListener('click', filterKitten);