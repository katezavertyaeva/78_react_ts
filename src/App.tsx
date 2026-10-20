import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Users from "./pages/Users/Users";
import AdminUser from "./pages/Users/components/AdminUser/AdminUser";
import Home from "./pages/Home/Home";


// Lessons imports
import Lesson05 from "./lessons/Lesson05/Lesson05";
import Lesson06 from "./lessons/Lesson06/Lesson06";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson12 from "./lessons/Lesson12/Lesson12";
import Lesson15 from "./pages/Lesson15/Lesson15";

// Homeworks imports
import Homework10 from "./homeworks/Homework10/Homework10";

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
          <Route path="/" element={<Home />} />
          <Route path="/lesson-05" element={<Lesson05 />} />
          <Route path="/lesson-06" element={<Lesson06 />} />
          <Route path="/lesson-07" element={<Lesson07 />} />
          <Route path="/lesson-08" element={<Lesson08 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/homework-10" element={<Homework10 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />
          {/* Lesson 14. React Router */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/admin" element={<AdminUser />} />
          {/* Lesson 15. Context */}
          <Route path="/lesson-15" element={<Lesson15 />} />

          {/* Страница PageNotFound будет показываться, если ни один из маршрутов
          выше не будет найден */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
