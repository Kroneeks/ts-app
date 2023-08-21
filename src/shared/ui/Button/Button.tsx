import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme: ButtonTheme,
    children?: ReactNode,
};

const Button = (props: ButtonProps) => {
    const {className, children, theme, ...otherProps} = props;

    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
};

export { Button };