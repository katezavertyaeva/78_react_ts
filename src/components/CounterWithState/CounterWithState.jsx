import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

// Для создания state необходимо использовать хук - useState
// Состояние - это как внутренне хранилище внутри компонента, которое со
// временем может изменять своё значение и актуальное значение мы сможем увидеть на странице
// (обычные переменные так не могут). В этом хранилище может храниться любой тип данных
function CounterWithState() {
  // При вывозве useState мы передаём значение по умолчанию для state
  // useState при вызове возвращает массив из 2-х элементов (1-текущее значение, 2 - функция)
  // Состояние можно изменить только с помощью функции, которую возвращает useState
  // const state = useState(6);

  const [count, setCount] = useState(0);
  // console.log(state);

  const onMinus = () => {
    // Есть 2 варианта как вызывать функцию для изменения state
    // 1 - в круглые скобки просто передаём новое значение ("apple" -> "banana") setState("banana")
    // 2 - в круглые скобки передают функцию callback, в параметрах которой мы имеем доступ к
    // предыдущему значению state и это нужно тогда, когда новое значение зависит от старого.
    // Функция callback должна вернуть новое значение
    setCount((prevState) => prevState - 1);
  };

  const onPlus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter-with-state-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinus} />
      </div>
      <div className="result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default CounterWithState;

// Обновление компонентов в React возможно только в 3-х случаях
// - когда изменяется значение props
// - изменение состояния (state)
// - с помощью специальной функции (forceUpdate)
