import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
};

export function Button({ label, loading = false, disabled = false, ...buttonProps }: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button className="ui-button" disabled={isDisabled} {...buttonProps}>
      {loading ? <span className="ui-button__spinner" aria-hidden="true" /> : label}
    </button>
  );
}
