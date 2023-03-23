const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML = countriesHTML.join(' ');

}
// option1: accessing countries common name and flags 
// const getCountryHTML = country => {
//     return `
//         <div class = "country">
//             <h2>${country.name.common}</h2>
//             <img src = "${country.flags.png}">
//         </div>
//     `
// }

// option 2: accesing countries common name and flags using destructuring
// const getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//         <div class = "country">
//             <h2>${name.common}</h2>
//             <img src = "${flags.png}">
//         </div>
//     `

// }
// option 3: accesing countries common name and flags using destructuring directly as parameter
const getCountryHTML = ({ name, flags,area,region }) => {

    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <p>${area}</p>
            <p>Contitnent: ${region}</p>
            <img src = "${flags.png}">
        </div>
    `

}


loadCountries();