// Node modules
import { useState } from "react";

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
      <input type="number" value={value} onChange={(event) => onChage(event)} />
      <p>Your value is: {result}</p>
    </div>
  );
}
