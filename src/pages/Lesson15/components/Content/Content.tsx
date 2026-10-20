import { useContext } from "react";

import { ContentComponent, DataItem } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";
import Button from "../../../../components/Button/Button";

function Content() {
  // Шаг 3. Получение данных с помощью хука useContext и передачи в него нужного контекста
  // const userData = useContext(MainCardContext)
  const { data, onDataChange } = useContext(MainCardContext);

  const clearData = () => {
    onDataChange(undefined);
  };

  return (
    <ContentComponent>
      <DataItem>First Name: {data?.firstName}</DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button name="CLEAR DATA" onClick={clearData} />
    </ContentComponent>
  );
}

export default Content;
