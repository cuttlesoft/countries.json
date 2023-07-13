const assert = require('assert')
const getCountry = require('../countries.es6').getCountry

describe('countries.json', () => {
  describe('getCountry', () => {
    // test United States JSON
    it('should load US data file: us.json', () => {
      country = getCountry('us')
      // assert we have the correct country by Code
      assert(country.code === 'US')

      // assert the division comman name is correct
      assert(country.division_common_name === 'State')

      // assert postal codes
      assert(country.postal_codes)
      assert(country.postal_codes_common_name === 'ZIP code')
    })

    // test Japan JSON
    it('should load JP data file: jp.json', () => {
      country = getCountry('jp')
      // assert we have the correct country by Code
      assert(country.code === 'JP')

      // assert the division comman name is correct
      assert(country.division_common_name === 'Prefecture')

      // assert postal codes
      assert(country.postal_codes)
      assert(country.postal_codes_common_name === 'Postal code')
    })
  })
})
