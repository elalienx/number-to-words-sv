export default function roundNumberWords(originalValue: string) {
  const digitAndWordRegex: RegExp = /^(\d+\s+\w+)(\s+\w+.*)?$/; // "1 tusen" "150 miljoner"
  let value: string = originalValue;

  return value.replace(digitAndWordRegex, (_, processedWord, extra) => {
    return extra ? `ca ${processedWord}` : processedWord;
  });
}
