// Lessons imports
import Lesson05 from "./lessons/Lesson05/Lesson05";

// Homeworks imports

function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
      {/* Lesson05. TypeScript */}
      <Lesson05 />
    </>
  );
}

export default App;
