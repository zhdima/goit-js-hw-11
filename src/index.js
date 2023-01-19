// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import { fetchCountries } from './fetchCountries';

// import './css/styles.css';

// Notiflix.Notify.init({position: 'center-top'});

// const DEBOUNCE_DELAY = 300;

// const inputSearch = document.querySelector('input#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// if (!inputSearch || !countryList || !countryInfo) {
//   throw new Error('Error: invalid markup!');
// }

// inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

// function onInputSearch(evt) {
//   const name = evt.target.value.trim();
  
//   if (!name) {
//     clearInfo();
//     return;
//   }

//   fetchCountries(name)
//     .then(handleData)
//     .catch(handleError);
// }

// function handleData(countries) {
//   const countriesCount = countries.length;
//   clearInfo();
//   if (countriesCount > 10) {
//     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//   } else if (countriesCount >= 2) {
//     countryList.innerHTML = createCountryListMarkup(countries);
//   } else if (countriesCount == 1) {
//     countryInfo.innerHTML = createCountryInfoMarkup(countries[0]);
//   }  
// }

// function handleError(err) {
//   clearInfo();
//   if (err.message.toLowerCase() === 'not found') {
//     Notiflix.Notify.failure('Oops, there is no country with that name');
//   } else {
//     console.error(err);
//   }
// }

// function createCountryListMarkup(countries) {
//   return countries.map(country =>
//     `<li class='countries-item'>
//       <img class='countries-item__flag' src='${country.flags.svg}' alt='flag of ${country.name.common}' width='30'>
//       <span class='countries-item__name'>${country.name.common}</span>
//     </li>`
//     ).join('');
// }

// function createCountryInfoMarkup(country) {
//   return `
//   <div class='country-title'>
//     <img class='country-flag' src='${country.flags.svg}' alt='flag of ${country.name.common}' width='30'>
//     <span class='country-name'>${country.name.common}</span>
//   </div>
//   <p class='country-field'><b>Capital:</b> ${country.capital}</p>
//   <p class='country-field'><b>Population:</b> ${country.population}</p>
//   <p class='country-field'><b>Languages:</b> ${Object.values(country.languages).join(', ')}</p>
//   `;
// }

// function clearInfo() {
//   countryList.innerHTML = ""; 
//   countryInfo.innerHTML = ""; 
// }
