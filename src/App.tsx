// Node modules
import { useState } from "react";

// Project files
import numberToWordsSV from "./scripts/numberToWordsSV";

export default function App() {
  // Local state
  const [value, setValue] = useState(0);
  const [result, setResult] = useState("zero");

  function onChage(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = Number(event.target.value);
    const newResult: string = numberToWordsSV(newValue);

    setValue(newValue);
    setResult(newResult);
  }

  return (
    <div>
      <h1>Number to words, Swedish</h1>
      <input
        type="number"
        value={value}
        onChange={(event) => onChage(event)}
        placeholder="100 000"
        min={0}
        max={100000000}
      />
      <p>
        Du har angett <b>{result}</b>, är det korrekt?
      </p>
    </div>
  );
}
