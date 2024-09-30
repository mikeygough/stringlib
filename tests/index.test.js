const {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
} = require('../src/index');

describe('capitalize', () => {
  const cases = [
    { input: 'hey', expected: 'Hey' },
    { input: 'Hey', expected: 'Hey' },
    { input: 'HEY', expected: 'Hey' },
    { input: "''", expected: "''" },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(capitalize(input)).toBe(expected);
    });
  });
});

describe('allCaps', () => {
  const cases = [
    { input: 'hey', expected: 'HEY' },
    { input: 'HEY', expected: 'HEY' },
    { input: "''", expected: "''" },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(allCaps(input)).toBe(expected);
    });
  });
});

describe('capitalizeWords', () => {
  const cases = [
    { input: 'hey', expected: 'Hey' },
    { input: 'hey, friends!', expected: 'Hey, Friends!' },
    { input: "''", expected: "''" },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(capitalizeWords(input)).toBe(expected);
    });
  });
});

describe('removeExtraSpaces', () => {
  const cases = [
    { input: 'hey    friends', expected: 'hey friends' },
    { input: '    hey   friends   ', expected: 'hey friends' },
    { input: "''", expected: "''" },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(removeExtraSpaces(input)).toBe(expected);
    });
  });
});

describe('kebobCase', () => {
  const cases = [
    { input: 'hey friends', expected: 'hey-friends' },
    {
      input: 'hey there my    friends!',
      expected: 'hey-there-my-friends',
    },
    { input: '', expected: '' },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(kebobCase(input)).toBe(expected);
    });
  });
});

describe('snakeCase', () => {
  const cases = [
    { input: 'hey friends', expected: 'hey_friends' },
    {
      input: 'hey there my    friends!',
      expected: 'hey_there_my_friends',
    },
    { input: '', expected: '' },
    {
      input: '   it-a-me mikey hellllooo helo    888',
      expected: 'itame_mikey_hellllooo_helo_888',
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(snakeCase(input)).toBe(expected);
    });
  });
});

describe('camelCase', () => {
  const cases = [
    { input: 'hey there', expected: 'heyThere' },
    {
      input: 'hey there my    friends!',
      expected: 'heyThereMyFriends!',
    },
    { input: '', expected: '' },
    {
      input: '   it-a-me mikey hellllooo helo    888',
      expected: 'it-a-meMikeyHelllloooHelo888',
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(camelCase(input)).toBe(expected);
    });
  });
});

describe('shift', () => {
  const cases = [
    { input: ['hey there'], expected: 'ey thereh' },
    { input: ['foo bar', 3], expected: 'barfoo' },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(shift(...input)).toBe(expected);
    });
  });
});

describe('makeHashTag', () => {
  const cases = [
    {
      input: 'Amazing bongo drums for sale',
      expected: ['#Amazing', '#Bongo', '#Drums'],
    },
    {
      input: 'hey there',
      expected: ['#There', '#Hey'],
    },
    { input: '', expected: '' },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(makeHashTag(input)).toStrictEqual(expected);
    });
  });
});

describe('isEmpty', () => {
  const cases = [
    { input: 'hey there', expected: false },
    {
      input: `   
			
			`,
      expected: true,
    },
    { input: ' \n \r \t ', expected: true },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      expect(isEmpty(input)).toBe(expected);
    });
  });
});
