import convertBelowThousand from "./convertBelowThousand";

export default function numberToWordsSV(value: number): string {
  // prettier-ignore
  const thousands = ["", "tusen", "miljoner", "miljard", "biljon"];

  // Safeguards
  if (value === 0) return "noll";
  if (value < 0) return "Nummer är mindre än noll";
  if (value > 999_999_999_999_999) return "Nummer är större än gränsen";

  const parts = [];
  let thousandIndex = 0;

  while (value > 0) {
    const chunk = value % 1000;

    if (chunk > 0) {
      let chunkToWords;

      // Evaluation A: Convert digits to words if bigger than 1_000_000
      if (thousandIndex >= 1) {
        chunkToWords = chunk.toString();
      } else {
        chunkToWords = convertBelowThousand(chunk);
      }

      // Evaluation B: Append thusands words if bigger than 1_000
      if (thousandIndex > 0) {
        chunkToWords += " " + thousands[thousandIndex];
      }

      parts.unshift(chunkToWords);
    }

    value = Math.floor(value / 1000);
    thousandIndex++;
  }
  console.log("parts", parts);

  // Round up
  if (thousandIndex <= 2) {
    return parts.join(" ").trim(); // return number as normal
  } else {
    let overSuffix = "";

    for (let index = 1; index < parts.length; index++) {
      if (parts[index] !== "") {
        overSuffix = "ca" + " ";
        break;
      }
    }

    return overSuffix + parts[0];
  }
}
