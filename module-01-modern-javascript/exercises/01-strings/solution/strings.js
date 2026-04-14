export const shout = (str) => str.toUpperCase() + '!';

export const whisper = (str) => `(${str.toLowerCase()})`;

export const formatTag = (id, zone) => `[${id}] ${zone}`;

export const containsWord = (str, word) => str.includes(word);

export const initials = (fullName) =>
  fullName
    .split(' ')
    .map((part) => part[0].toUpperCase())
    .join('.') + '.';
