import convertBelowThousand from "./convertBelowThousand";

export default function numberToWordsSV(value: number): string {
  // prettier-ignore
  const thousands = ["", "tusen", "miljon", "miljard", "biljon"];

  // Safeguards
  if (value === 0) return "noll";
  if (value < 0) return "Nummer är mindre än noll";
  if (value > 999_999_999_999_999) return "Nummer är större än gränsen";

  const parts = [];
  let thousandIndex = 0;

  while (value > 0) {
    const chunk = value % 1000;

    if (chunk > 0) {
      let chunkWords = convertBelowThousand(chunk);

      if (thousandIndex > 0) {
        chunkWords += " " + thousands[thousandIndex];
      }

      parts.unshift(chunkWords);
      console.log("chunkWords", chunkWords);
    }

    value = Math.floor(value / 1000);
    thousandIndex++;
  }

  return parts.join(" ").trim();
}
