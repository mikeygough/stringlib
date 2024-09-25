"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.allCaps = allCaps;
exports.capitalizeWords = capitalizeWords;
exports.removeExtraSpaces = removeExtraSpaces;
exports.kebobCase = kebobCase;
exports.snakeCase = snakeCase;
exports.camelCase = camelCase;
exports.shift = shift;
exports.makeHashTag = makeHashTag;
exports.isEmpty = isEmpty;
/**
 * Returns a string with the first letter capitalized
 * */
function capitalize(str) {
    if (str.length < 1) {
        return '';
    }
    var first = str[0].toUpperCase();
    var rest = str.slice(1).toLowerCase();
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
    var words = str.split(' ');
    var wordsCapitalized = words.map(function (word) { return capitalize(word); });
    return wordsCapitalized.join(' ');
}
/**
 * Returns a string with leading and trailing whitespace removed
 * */
function removeExtraSpaces(str) {
    return str
        .trim()
        .split(' ')
        .filter(function (c) { return c !== ''; })
        .join(' ');
}
/**
 * Returns a string with each word separated by the separator character (- by default)
 * */
function kebobCase(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var lower = str.toLowerCase();
    var chars = lower.split('');
    var filtered = chars.filter(function (c) {
        var code = c.charCodeAt(0);
        if (code > 96 && code < 123) {
            // keep letters
            return true;
        }
        else if (code > 47 && code < 58) {
            // keep numbers
            return true;
        }
        else if (code === 32 || code === separator.charCodeAt(0)) {
            // keep space and hyphen
            return true;
        }
        else {
            return false;
        }
    });
    var spaceFree = removeExtraSpaces(filtered.join(''));
    return spaceFree.split(' ').join(separator);
}
/**
 * Returns a string with each word separated by an underscore (_)
 * */
function snakeCase(str) {
    return kebobCase(str, '_');
}
/**
 * Returns a string with spaces removed and the first character of each word, except the first, capitalized
 * */
function camelCase(str) {
    var spaceFree = removeExtraSpaces(str);
    var words = spaceFree.split(' ');
    var camelWords = words.map(function (word, index) {
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
function shift(str, chars) {
    if (chars === void 0) { chars = 1; }
    if (str.length < 1) {
        return '';
    }
    var newStr = str.slice(chars).trim();
    for (var i = 0; i < chars; i++) {
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
    var spaceFree = removeExtraSpaces(str);
    var words = spaceFree.split(' ');
    // sort
    var sortedWords = words.sort(function (a, b) { return b.length - a.length; });
    var threeWords = sortedWords.slice(0, 3);
    var hashTags = threeWords.map(function (word) {
        return '#' + capitalize(word);
    });
    return hashTags;
}
/**
 * Returns a boolean if the input is all empty chars (\n, \r, \t)
 * */
function isEmpty(str) {
    var trimmed = str.trim();
    for (var _i = 0, trimmed_1 = trimmed; _i < trimmed_1.length; _i++) {
        var char = trimmed_1[_i];
        if (char !== '\n' && char !== '\r' && char !== '\t') {
            return false;
        }
    }
    return true;
}
