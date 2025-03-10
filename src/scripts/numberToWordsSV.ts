// Node modules
import hundredsToWords from "./hundredsToWords";

export default function numberToWordsSV(value: number): string {
  if (value < 1000) return hundredsToWords(value);

  return `${value} in Swedish`;
}
