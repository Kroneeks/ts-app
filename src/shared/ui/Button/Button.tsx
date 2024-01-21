import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

const Button = memo((props: ButtonProps): React.ReactElement => {
    const {
        className = '',
        children,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square = false,
        disabled = false,
        fullWidth = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            {...otherProps}
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
