import { useId, type InputHTMLAttributes } from 'react';
import './TextField.css';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextField({ label, error, id, ...inputProps }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="ui-text-field">
      <label className="ui-text-field__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={`ui-text-field__input${error ? ' ui-text-field__input--error' : ''}`}
        {...inputProps}
      />
      {error ? <span className="ui-text-field__error">{error}</span> : null}
    </div>
  );
}
