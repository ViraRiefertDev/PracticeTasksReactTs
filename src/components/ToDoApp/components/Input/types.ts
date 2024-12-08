import { ChangeEvent } from 'react';

export interface InputProps {
  placeholder: string;
  inputValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
