/**
 * Returns the string in uppercase with "!" appended.
 * @param {string} str
 */
export const shout = (str) => {
  const exclaimString = str + '!';
  const shoutString = exclaimString.toUpperCase();
  console.log(shoutString);
  return shoutString;
};

/**
 * Returns the string in lowercase, wrapped in parentheses.
 * @param {string} str
 */
export const whisper = (str) => {
  return `(${str.toLowerCase()})`;
};

/**
 * Returns "[id] zone" using a template literal.
 * @param {string} id
 * @param {string} zone
 */
export const formatTag = (id, zone) => {
  return `[${id}] ${zone}`
};

/**
 * Returns true if str includes word, false otherwise.
 * @param {string} str
 * @param {string} word
 */
export const containsWord = (str, word) => {
  return str.includes(word);
};

/**
 * Given "First Last", returns "F.L."
 * Split on space, take first char of each part, uppercase, join with dots, trailing dot.
 * @param {string} fullName
 */
export const initials = (fullName) => {
  const names = fullName.split(" ");
  console.log(names)
  const initials = names.map(name => name.charAt(0));
  console.log(initials)
  const joinedInitials = initials.join(".") + '.';
  console.log(joinedInitials);
  return joinedInitials;
};
