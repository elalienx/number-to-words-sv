export default function convertBelowThousand(value: number): string {
  // prettier-ignore
  const ones = ["", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio"];
  // prettier-ignore
  const teens = ["tio", "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjutton", "arton", "nitton"];
  // prettier-ignore
  const tens = ["", "", "tjugo", "trettio", "fyrtio", "femtio", "sextio", "sjuttio", "åttio", "nittio"];
  let result = [];

  // Safeguards
  if (value === 0) return "noll";
  if (value < 0) return "Nummer är mindre än noll";
  if (value >= 1000) return "";

  if (value >= 100) {
    result.push(ones[Math.floor(value / 100)] + " " + "hundra");
    value %= 100;
  }
  if (value >= 10 && value <= 19) {
    result.push(teens[value - 10]);
  } else {
    if (value >= 20) {
      result.push(tens[Math.floor(value / 10)]);
      value %= 10;
    }
    if (value > 0) {
      result.push(ones[value]);
    }
  }

  return result.join(" ");
}
