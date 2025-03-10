// Node modules
import tens from "./tens";

export default function numberToWordsSV(value: number): string {
  if (value < 11) return tens(value);

  return `${value} in Swedish`;
}
