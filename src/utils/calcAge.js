import converter from 'number-to-words';

const calcAge = birthday => {
  const birthdayArr = birthday.split('.');
  if (birthday) {
    const yearsFloat =
      (new Date() - new Date(birthdayArr[2], birthdayArr[1], birthdayArr[0])) /
      (60000 * 60 * 24 * 365);
    const fullYears = Math.floor(yearsFloat);
    if (isNaN(fullYears)) {
      return 'unknown';
    }
    const yearsWord = converter.toWords(fullYears);
    switch (yearsWord) {
      case 'zero':
        return 'baby';
      case 'one':
        return 'one year';
      default:
        return `${yearsWord} years`;
    }
  }
  return 'unknown';
};

export default calcAge;
