import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'outline_red';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    children?: ReactNode;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

const Button = memo((props: ButtonProps): React.ReactElement => {
    const {
        className = '',
        children,
        variant = 'outline',
        size = 'm',
        square = false,
        disabled = false,
        fullWidth = false,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    return (
        <button
            {...otherProps}
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
