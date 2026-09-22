import type { ButtonProps } from "./types";
import { MyButton } from "./styles";

function Button({ name, type = "button", onClick }: ButtonProps) {
  return (
    <MyButton type={type} onClick={onClick}>
      {name}
    </MyButton>
  );
}

export default Button;
