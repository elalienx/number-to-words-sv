export default function hundredsToWords(number: number): string {
  // prettier-ignore
  const ones = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  // prettier-ignore
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const hundred = "hundred";
  let result = "";

  // Safeguards
  if (number < 0) return "Cannot calculate negative numbers";
  if (number === 0) return "zero";
  if (number > 999) return "Cannot calculate numbers over 999";

  if (number >= 100) {
    result += ones[Math.floor(number / 100)] + " " + hundred;
    number %= 100;

    if (number > 0) result += " ";
  }
  if (number >= 20) {
    result += tens[Math.floor(number / 10)];
    if (number % 10 > 0) result += "-" + ones[number % 10];
  } else if (number > 0) {
    result += ones[number];
  }

  return result;
}
