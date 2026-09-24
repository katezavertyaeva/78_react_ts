import { useState } from "react";

import Button from "../Button/Button";
import { ButtonWrapper, CounterWithStateWrapper, Result } from "./styles";

function CounterWithState() {
  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevState) => prevState - 1);
  };

  const onPlus = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <CounterWithStateWrapper>
      <ButtonWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonWrapper>
      <Result>{count}</Result>
      <ButtonWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterWithStateWrapper>
  );
}

export default CounterWithState;

