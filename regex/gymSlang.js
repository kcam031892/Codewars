function gymSlang(phrase) {
  return phrase.replace(/probably|i am|instagram|do not|going to|combination/gi, function (match) {
    const firstChar = match[0];
    switch (match.toLowerCase()) {
      case 'probably':
        return firstChar + 'rolly';
      case 'i am':
        return firstChar + "'m";
      case 'instagram':
        return firstChar + 'nsta';
      case 'do not':
        return firstChar + "on't";
      case 'going to':
        return firstChar + 'onna';
      case 'combination':
        return firstChar + 'ombo';
    }
  });
}
function gymSlang(phrase) {
  const dict = {
    probably: 'rolly',
    'i am': "'m",
    instagram: 'nsta',
    'do not': "on't",
    'going to': 'onna',
    combination: 'ombo',
  };
  return phrase.replace(/probably|i am|instagram|do not|going to|combination/gi, function (match) {
    const firstChar = match[0];
    return firstChar + dict[match.toLowerCase()];
  });
}

assert.deepEqual(gymSlang('When I miss few days of gym'), 'When I miss few days of gym');
assert.deepEqual(gymSlang('Squad probably think I am fake'), "Squad prolly think I'm fake");
assert.deepEqual(gymSlang('Whole squad probably bigger than me now'), 'Whole squad prolly bigger than me now');
assert.deepEqual(gymSlang('No selfie to post on Instagram either'), 'No selfie to post on Insta either');
assert.deepEqual(gymSlang('Gym crush probably found someone else'), 'Gym crush prolly found someone else');
assert.deepEqual(gymSlang('What if I die fat'), 'What if I die fat');
assert.deepEqual(gymSlang('What if I do not fit in my clothes now'), "What if I don't fit in my clothes now");
assert.deepEqual(gymSlang('Going to feel like a new gym member'), 'Gonna feel like a new gym member');
assert.deepEqual(gymSlang('wait what was my lock combination'), 'wait what was my lock combo');
assert.deepEqual(
  gymSlang('that skinny girl can probably outlift me now'),
  'that skinny girl can prolly outlift me now'
);
