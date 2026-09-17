// Упрощенный импорт стилей
import "./styles.css";
import type { ButtonProps } from "./types";


function Button({ name, type = "button", onClick }: ButtonProps) {
  return (
    <button className="my-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

// Компоненты экспортируем по умолчанию
export default Button;
