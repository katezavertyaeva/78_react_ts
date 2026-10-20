import { useContext, useState, type ChangeEvent } from "react";

import Input from "../../components/Input/Input";
import { InputsContainer, HomeWrapper, Title } from "./styles";
import Button from "../../components/Button/Button";
import { InputContext } from "../../components/Layout/Layout";

function Home() {
  const [example2, setExample2] = useState("");
  const { onDataChange } = useContext(InputContext);

  const onChangeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2(event.target.value.toUpperCase());
  };

  const getResult = () => {
    onDataChange(example2)
  };

  return (
    <HomeWrapper>
      <Title>Home</Title>
      <InputsContainer>
        <Input
          name="example2"
          label="Example 2"
          placeholder="Enter second value"
          id="id_example_2"
          value={example2}
          onChange={onChangeExample2}
        />
        <Button name="Get result" onClick={getResult} />
      </InputsContainer>
    </HomeWrapper>
  );
}

export default Home;
