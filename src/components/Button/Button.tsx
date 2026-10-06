import type { ButtonProps } from "./types";
import { MyButton } from "./styles";

function Button({ name, type = "button", onClick, disabled }: ButtonProps) {
  return (
    <MyButton type={type} onClick={onClick} disabled={disabled}>
      {name}
    </MyButton>
  );
}

export default Button;
