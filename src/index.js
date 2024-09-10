/**
 * Returns a string with the first letter capitalized
 * */
function capitalize(str) {
  if (str.length < 1) {
    return '';
  }
  const first = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return first + rest;
}

/**
 * Returns a string with all characters capitalized
 * */
function allCaps(str) {
  return str.toUpperCase();
}

/**
 * Returns a string with the first letter of each word capitalized
 * */
function capitalizeWords(str) {
  let words = str.split(' ');
  let wordsCapitalized = words.map((word) => capitalize(word));
  return wordsCapitalized.join(' ');
}

/**
 * Returns a string with leading and trailing whitespace removed
 * */
function removeExtraSpaces(str) {
  return str
    .trim()
    .split(' ')
    .filter((c) => c !== '')
    .join(' ');
}

/**
 * Returns a string with each word separated by the separator character (- by default)
 * */
function kebobCase(str, separator = '-') {
  const lower = str.toLowerCase();
  const chars = lower.split('');
  const filtered = chars.filter((c) => {
    const code = c.charCodeAt(0);
    if (code > 96 && code < 123) {
      // keep letters
      return true;
    } else if (code > 47 && code < 58) {
      // keep numbers
      return true;
    } else if (code === 32 || code === separator.charCodeAt()) {
      // keep space and hyphen
      return true;
    } else {
      return false;
    }
  });
  const spaceFree = removeExtraSpaces(filtered.join(''));
  return spaceFree.split(' ').join(separator);
}

/**
 * Returns a string with each word separated by an underscore (_)
 * */
function snakeCase(str) {
  return kebobCase(str, (separator = '_'));
}

/**
 * Returns a string with spaces removed and the first character of each word, except the first, capitalized
 * */
function camelCase(str) {
  const spaceFree = removeExtraSpaces(str);
  const words = spaceFree.split(' ');
  const camelWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  });
  return camelWords.join('');
}

/**
 * Returns a string with the number of chars shifted to the end of the string
 * */
function shift(str, chars = 1) {
  let newStr = str.slice(chars).trim();
  for (let i = 0; i < chars; i++) {
    newStr += str[i];
  }
  return newStr;
}

/**
 * Returns an array of the three longest strings preceded with a hashtag (#)
 * */
function makeHashTag(str) {
  if (str.length < 1) {
    return '';
  }
  const spaceFree = removeExtraSpaces(str);
  const words = spaceFree.split(' ');
  // sort
  const sortedWords = words.sort((a, b) => b.length - a.length);
  const threeWords = sortedWords.slice(0, 3);
  const hashTags = threeWords.map((word) => {
    return '#' + capitalize(word);
  });
  return hashTags;
}

/**
 * Returns a boolean if the input is all empty chars (\n, \r, \t)
 * */
function isEmpty(str) {
  const trimmed = str.trim();
  for (const char of trimmed) {
    if (char !== '\n' && char !== '\r' && char !== '\t') {
      return false;
    }
  }
  return true;
}

module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
