export default function tens(value: number): string {
  // prettier-ignore
  const digits = ["nul", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

  // Safeguards
  if (value < 0) return "Nummer is less than noll";
  if (value > 10) return "Nummer is bigger than tio";

  return digits[value];
}
