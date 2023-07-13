/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

export default function getCountry(code) {
  return require(`./data/${code}.json`)
}
