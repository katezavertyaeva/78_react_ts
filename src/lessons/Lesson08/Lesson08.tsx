import { useState, type ChangeEvent } from "react";

import Input from "../../components/Input/Input";
import { InputsContainer, Lesson08Wrapper, Paragraph, Title } from "./styles";
import Button from "../../components/Button/Button";

// Неконтролируемые компоненты - их значение и способ их изменения мы
// не котролируем внутри компонента
// Контролируемые компоненты - их значение мы храним внутри React
// (в локальном хранилище) и изменяем его значение с помощью функции
// изменения состояния
function Lesson08() {
  const [example2, setExample2] = useState("");
  const [result, setResult] = useState("");

  const onChangeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2(event.target.value.toUpperCase());
  };

  const getResult = () => {
    setResult(example2);
  };

  return (
    <Lesson08Wrapper>
      <Title>Lesson 08</Title>
      <Paragraph>Inputs example</Paragraph>
      <InputsContainer>
        {/* Неконтролируемый компонент */}
        <Input name="example1" label="Example 1" placeholder="Enter value" />
        {/* Контролируемый компонент */}
        <Input
          name="example2"
          label="Example 2"
          placeholder="Enter second value"
          id="id_example_2"
          value={example2}
          onChange={onChangeExample2}
        />
        <Button name="Get result" onClick={getResult}/>
      </InputsContainer>
      {result}
    </Lesson08Wrapper>
  );
}

export default Lesson08;
