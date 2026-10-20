import { createContext, useState } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import type { MainCardContextType, UserData } from "./types";

// Шаг 1. Создание хранилища - контекста, с помощью функции createContext
// export const MainCardContext = createContext<UserData | undefined>(undefined);
export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => {},
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // Шаг 2. Создание провайдера (обертки) для доступа к данным всех
    // вложенных компонентов и передачи данных в контекст через value
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider
      value={{
        data: userData,
        onDataChange: setUserData,
      }}
    >
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
