// Node modules
import { useState } from "react";

// Project files
import numberToWords from "./scripts/numberToWords";
import "./style/style.css";

export default function App() {
  // Local state
  const [digits, setDigits] = useState(10_000);
  const [words, setWords] = useState(numberToWords(digits));

  // Properties
  const MIN_VALUE = 0;
  const MAX_VALUE = 999_999_999_999_999;
  const VERSION = 1.4;

  // Methods
  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = Number(event.target.value);
    const newResult: string = numberToWords(newValue);

    setDigits(newValue);
    setWords(newResult);
  }

  return (
    <div>
      <h1>Nummer till ord på Svenska </h1>
      <p>
        <small>(version {VERSION})</small>
      </p>
      <input
        max={MAX_VALUE}
        min={MIN_VALUE}
        onChange={(event) => onInputChange(event)}
        type="number"
        value={digits}
      />
      <p>
        Du har angett <span className="highlight">{words}</span> kr, är det
        korrekt?
      </p>
      <section className="section-small rules">
        <h2>📐 Rules</h2>
        <ul>
          <li>
            0 – 999,999: Display the full amount in words (e.g., “hundratusen
            kr”) (one hundred thousand). ✅
          </li>
          <li>
            1,000,000 – 999,999,999: Display a mix of digits and words (e.g.,
            “10 miljoner kr”) ✅
          </li>
          <li>
            Non-round millions (e.g., 1,340,054): Round to one decimal place in
            millions with "ca" (e.g., “ca 1,3 miljoner kr”) ✅
          </li>
        </ul>
      </section>
      <section className="section-small bug-report">
        <h2>🐞 Report errors</h2>
        If a number has the wrong words, please add it to this list:{" "}
        <a
          href="https://www.icloud.com/numbers/02356ez-PiGc11ZE4CfMEykhQ#nubers-to-words-sv"
          target="_blank"
        >
          Numbers spreadsheet
        </a>
      </section>
    </div>
  );
}
