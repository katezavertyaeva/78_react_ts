import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface InputContextType {
  data: string;
  onDataChange: Dispatch<SetStateAction<string>> | (() => void);
}
