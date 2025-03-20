export default function roundNumberWords(value: string) {
  const regex: RegExp = /^(\d+\s+\w+)(\s+\w+.*)?$/; // "1 tusen" "150 miljoner"

  return value.replace(regex, (_, word: string, hasExtraWords: boolean) => {
    return hasExtraWords ? `ca ${word}` : word;
  });
}
