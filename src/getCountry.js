export default function getCountry(code) {
  try {
    return require(`../data/${code}.json`);
  } catch (e) {
    throw new Error(`Invalid country code: ${code}`);
  }
}
