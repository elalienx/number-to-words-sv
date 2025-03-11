// Node modules
import { useState } from "react";

// Project files
import numberToWordsSV from "./scripts/numberToWordsSV";

export default function App() {
  // Local state
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(numberToWordsSV(value));

  // Properties
  const MINIMUM_VALUE = 0;
  const MAXIMUM_VALUE = 100_000;

  // Methods
  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = Number(event.target.value);
    const newResult: string = numberToWordsSV(newValue);

    setValue(newValue);
    setResult(newResult);
  }

  return (
    <div>
      <h1>Number to words, Swedish</h1>
      <input
        max={MAXIMUM_VALUE}
        min={MINIMUM_VALUE}
        onChange={(event) => onInputChange(event)}
        type="number"
        value={value}
      />
      <p>
        Du har angett <b>{result}</b>, är det korrekt?
      </p>
    </div>
  );
}
