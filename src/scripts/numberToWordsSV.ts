export default function numberToWordsSV(value: number): string {
  // prettier-ignore
  const ones = ["", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio"];
  // prettier-ignore
  const teens = ["tio", "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjutton", "arton", "nitton"];
  // prettier-ignore
  const tens = ["", "", "tjugo", "trettio", "fyrtio", "femtio", "sextio", "sjuttio", "åttio", "nittio"];
  // prettier-ignore
  const thousands = ["", "tusen", "miljon", "miljard", "biljon"];

  // Safeguards
  if (value === 0) return "noll";
  if (value < 0) return "Nummer är mindre än noll";
  if (value > 999_999_999_999_999) return "Nummer är större än gränsen";

  function convertBelowThousand(n: number) {
    let words = [];

    if (n >= 100) {
      words.push(ones[Math.floor(n / 100)] + "hundra");
      n %= 100;
    }
    if (n >= 10 && n <= 19) {
      words.push(teens[n - 10]);
    } else {
      if (n >= 20) {
        words.push(tens[Math.floor(n / 10)]);
        n %= 10;
      }
      if (n > 0) {
        words.push(ones[n]);
      }
    }

    return words.join(" ");
  }

  let parts = [];
  let thousandIndex = 0;

  while (value > 0) {
    let chunk = value % 1000;
    if (chunk > 0) {
      let chunkWords = convertBelowThousand(chunk);
      if (thousandIndex > 0) {
        chunkWords += " " + thousands[thousandIndex];
      }
      parts.unshift(chunkWords);
    }
    value = Math.floor(value / 1000);
    thousandIndex++;
  }

  return parts.join(" ").trim();
}
