import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function CounterWithState() {
  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevState) => prevState - 1);
  };

  const onPlus = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter-with-state-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinus} />
      </div>
      <div className="result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default CounterWithState;

