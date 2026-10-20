import { useContext } from "react";

import { InputContext } from "../../components/Layout/Layout";
import MainCard from "./components/MainCard/MainCard";
import { Lesson15Wrapper } from "./styles";

function Lesson15() {
  const { data } = useContext(InputContext);
  return (
    <Lesson15Wrapper>
      <MainCard />
      {data}
    </Lesson15Wrapper>
  );
}
export default Lesson15;
