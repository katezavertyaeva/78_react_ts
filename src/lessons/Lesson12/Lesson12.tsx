import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import { FormWrapper, Lesson12Wrapper, Result } from "./styles";
import Button from "../../components/Button/Button";

function Lesson12() {
  const [search, setSearch] = useState<string>("");
  const [joke, setJoke] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  //   Функция для отправки запроса на получение случайной шутки
  const fetchJokeData = async () => {
    setIsLoading(true);
    setError("");

    try {
      const result = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = result.data;
      setJoke(`${data.setup}: ${data.punchline}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //   Выполнение действия при монтировании компонента (пустой массив зависимостей)
  useEffect(() => {
    fetchJokeData();
  }, []);

  //   Выполнение действия при обновлении компонента (массив зависимостей
  //   со значением(ями) state или prop)
  useEffect(() => {
    fetchJokeData();
  }, [search]);

  // Выполнение действия перед размонтированием компонента (в функции callback
  //   вернуть функцию, которая должна выполнить)
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <Lesson12Wrapper>
      <FormWrapper>
        <Input
          name="search"
          id="search_id"
          placeholder="Enter value"
          label="Search"
          value={search}
          onChange={onChangeSearch}
        />
        <Button name="GET RESULT" onClick={fetchJokeData} />
      </FormWrapper>
      <Result>{error ? error : joke}</Result>
    </Lesson12Wrapper>
  );
}

export default Lesson12;
