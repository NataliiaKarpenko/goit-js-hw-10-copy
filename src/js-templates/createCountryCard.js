export const createCountryCard = (countryInfo) => {
  return `
  <h1><img src="${countryInfo[0].flags.svg}" alt="flag" width="60"><span>
  
  ${countryInfo[0].name.official}</span></h1 >
    <ul>
      <li class="info-item"><span class="info-item-title">Capital:</span><span>${
        countryInfo[0].capital
      }</span></li>
      <li class="info-item"><span class="info-item-title">Population:</span><span>${
        countryInfo[0].population
      }</span></li>
      <li class="info-item"><span class="info-item-title">Languages:</span><span>${Object.values(
        countryInfo[0].languages
      )}</span></li>
    </ul>`;
};
