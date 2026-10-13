import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";

// Lessons imports
// import Lesson05 from "./lessons/Lesson05/Lesson05";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson12 from "./lessons/Lesson12/Lesson12";

// Homeworks imports
// import Homework10 from "./homeworks/Homework10/Homework10";

function App() {
  return (
    // <></> - fragment. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - компонент из react-router, в котором мы храним
        все пути и компоненты страниц, которые должно по ним отображаться */}
        <Routes>
          {/* Route - компонент, который содержит путь и страницу, которая отображается
          по этому пути */}
          <Route path="/" element="Home" />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
