export default function roundNumberWords(value: string) {
  const digitAndWord: RegExp = /^\d+\s+\w+$/; // "1 miljon"
  const singleWord: RegExp = /^\w+$/; // "tvåhundra"
  const digitAndDoubleWord: RegExp = /^(\d+\s+\w+)\s+\w+/; // "1 tusen ett"
  const doubleWord: RegExp = /^(\w+)\s+\w+/; // "tjugoetttusen femhundraåttiofyra")
  const longWords = value.match(digitAndDoubleWord) || value.match(doubleWord);

  // Safeguard
  if (digitAndWord.test(value) || singleWord.test(value)) {
    return value;
  }

  return longWords ? `ca ${longWords[1]}` : value;
}
