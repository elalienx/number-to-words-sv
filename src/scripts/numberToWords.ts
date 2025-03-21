import convertBelowThousand from "./convertBelowThousand";
import roundNumberWords from "./roundNumberWords";

export default function numberToWords(originalValue: number): string {
  const thousands: string[] = ["", "tusen", "miljon", "miljard", "biljon"];
  const parts: string[] = [];
  let value: number = originalValue;
  let thousandIndex = 0;

  // Safeguards
  if (value === 0) return "noll";
  if (value < 0) return "Nummer är mindre än noll";
  if (value > 999_999_999_999_999) return "Nummer är för stort";

  while (value > 0) {
    const chunk: number = value % 1000;

    if (chunk > 0) {
      let chunkToWords: string;

      // Evaluation A: Convert digits to words if value is under 1_000_000
      if (thousandIndex < 2) {
        chunkToWords = convertBelowThousand(chunk);
      } else {
        chunkToWords = chunk.toString();
      }

      // Evaluation B: After convertion, Append thusands suffix if over 1_000
      if (thousandIndex > 0) {
        const isPlural = chunkToWords !== "1";
        const isOverMillion = thousandIndex > 1;
        let suffix = thousands[thousandIndex];
        let space = "";

        if (isPlural && isOverMillion) suffix += "er";
        if (isOverMillion) space = " ";

        chunkToWords += space + suffix;
      }

      parts.unshift(chunkToWords);
    }

    value = Math.floor(value / 1000);
    thousandIndex++;
  }

  return roundNumberWords(parts.join(" "));
}
