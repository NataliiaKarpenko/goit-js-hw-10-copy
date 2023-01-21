export const createCountryList = countriesInfo =>
  countriesInfo
    .map(
      country =>
        `
<li class="country-list-item"><img src="${country.flags.svg}" class="flag-image" alt="flag" width="40"><span>
  ${country.name.official}</span></li>`
    )
    .join('');
