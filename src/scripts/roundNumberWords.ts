export default function roundNumberWords(value: string) {
  const digitAndWord: RegExp = /^\d+\s+[\p{L}\p{M}]+$/u; // "1 miljon"
  const singleWord: RegExp = /^[\p{L}\p{M}]+$/u; // "tvåhundra"
  const digitAndDoubleWord: RegExp = /^(\d+\s+[\p{L}\p{M}]+)\s+[\p{L}\p{M}]+/u; // "1 tusen ett"
  const doubleWord: RegExp = /^([\p{L}\p{M}]+)\s+[\p{L}\p{M}]+/u; // "tjugoetttusen femhundraåttiofyra"
  const longWords = value.match(digitAndDoubleWord) || value.match(doubleWord);

  // Safeguard
  if (digitAndWord.test(value) || singleWord.test(value)) {
    return value;
  }

  return longWords ? `ca ${longWords[1]}` : value;
}
