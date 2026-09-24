import GlobalStyles from "./styles/GlobalStyles";

// Lessons imports
// import Lesson05 from "./lessons/Lesson05/Lesson05";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";

// Homeworks imports

function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
      <GlobalStyles />
      {/* Lesson 05. TypeScript */}
      {/* <Lesson05 /> */}
      {/* Lesson 06. Component typing */}
      {/* <Lesson06/> */}
      {/* Lesson 07. Styling components */}
      {/* <Lesson07/> */}
      {/* Lesson 08. Controlled and uncontrolled components */}
      <Lesson08 />
    </>
  );
}

export default App;
