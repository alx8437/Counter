import React, {ButtonHTMLAttributes, FC} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    onClick: () => void
    disabled: boolean
}

export const Button:FC<ButtonProps> = ({className, disabled, onClick, children}) => {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            {children}
        </button>
    );
};
