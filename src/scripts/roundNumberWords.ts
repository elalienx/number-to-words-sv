export default function roundNumberWords(value: string) {
  // Patterns:
  const patternA: RegExp = /^\d+\s+\w+$/; // Digit + word (e.g., "1 miljon")
  const patternB: RegExp = /^\w+$/; // Single word (e.g., "tvåhundra")
  const patternC: RegExp = /^(\d+\s+\w+)\s+\w+/; // Digit + word + extra (e.g., "1 tusen ett")
  const patternD: RegExp = /^(\w+)\s+\w+/; // Word + word (e.g., "tjugoetttusen femhundraåttiofyra")
  const match = value.match(patternC) || value.match(patternD);

  // Safeguard good patterns
  if (patternA.test(value) || patternB.test(value)) {
    return value; // Valid patterns, return as is
  }

  // If it matches pattern C or D, truncate extra words and prefix with "ca"
  return match ? `ca ${match[1]}` : value;
}
