import type { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  id?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
