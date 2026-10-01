import { ErrorMessage, InputComponent, InputWrapper, Label } from "./styles";
import type { InputProps } from "./types";

function Input({
  name,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  label,
  error
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputComponent
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
}

export default Input;
