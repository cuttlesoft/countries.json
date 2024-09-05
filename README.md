# countries.json

[![JavaScript experts and Node.js masters delivering custom software development solutions. Specialized in React, full-stack web applications, and bespoke JavaScript projects. Professional developers crafting tailored, high-performance code for modern business needs.](https://static.cuttlesoft.com/wp-content/uploads/2024/09/05190026/970x250-banner-variation-20.png)](https://cuttlesoft.com/services/javascript/)

This repository hosts a rich dataset featuring countries, their ISO standard codes, subdivisions, and localized names for those subdivisions. It also includes data on whether a postal code system exists for the country and the common name for it. Each country data is represented as a JSON object and organized in a directory by the country's two-digit ISO code.

The repository provides a JavaScript helper file for easy integration into web applications.

## 📦 Install

You can install this module directly from the npm registry:

```bash
npm install @cuttlesoft/countries.json
```

## ✨ Features

- **Comprehensive Country Data**
  
  The repository hosts an extensive dataset with country-specific details including country name, subdivisions, and postal codes, all in compliance with ISO standards.

- **Easy Integration**

  A JavaScript helper function is included that lets you quickly import and utilize the data in your web application.

- **Localization Ready**

  The data set includes localized names for subdivisions and postal codes, perfect for creating localization features in your application.

## Use Cases

This dataset can be leveraged in multiple ways:

1. **Dynamic and localized forms:** Use the dataset to create dynamic forms that change based on the selected country. For example, when a user selects their country, you can show relevant subdivisions and check if postal codes are used, tailoring the user experience to their locale.

2. **Geolocation services:** Leverage this data for building out geolocation services in your application, providing localized experiences based on a user's country and subdivision.

3. **Localization of country-specific data:** Use the localized subdivision names and postal code information for translating your UI components or forms based on user location.

## Quick Start

Clone this repo using `git clone --depth=1 <https://github.com/cuttlesoft/countries.json.git> <YOUR_PROJECT_NAME>`

Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`

Start utilizing the data in your web application. Here is an example of how you can use the helper function to fetch data for a specific country:

```javascript
import getCountry from 'countries.json';

// Fetch data for Canada
const canadaData = getCountry('CA');

console.log(canadaData.name); // Outputs: "Canada"
```

Example schema:

```json
{
  "code": "CA",
  "name": "Canada", 
  "division_common_name": "Province", 
  "divisions": {
    "AB": "Alberta", 
    "BC": "British Columbia", 
    "MB": "Manitoba", 
    "NB": "New Brunswick", 
    "NL": "Newfoundland and Labrador", 
    "NT": "Northwest Territories", 
    "NS": "Nova Scotia", 
    "NU": "Nunavut", 
    "ON": "Ontario", 
    "PE": "Prince Edward Island", 
    "QC": "Quebec", 
    "SK": "Saskatchewan", 
    "YT": "Yukon"
  },
  "postal_codes": true, 
  "postal_codes_common_name": "Postal code"
}
```

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 🤝 Need Help with Your JavaScript Project?

At Cuttlesoft, we specialize in [JavaScript development](https://cuttlesoft.com/services/javascript/), including advanced techniques like data manipulation and dynamic user interfaces. Whether you need assistance implementing complex algorithms, optimizing performance, or scaling your JavaScript application, our team of expert developers is here to help. From front-end frameworks to back-end Node.js solutions, we've got you covered.

[Contact us](https://cuttlesoft.com/contact/) to discuss how we can elevate your JavaScript project to new heights!
