import type { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "password" | "number" | "email";
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
