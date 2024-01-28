import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type ReactNode, memo, type HTMLAttributes } from 'react';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'no-round' | 'sm-round' | 'xl-round';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    borderR?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

const Card = memo((props: CardProps) => {
    const {
        className = '',
        children,
        variant = 'normal',
        max,
        padding = '8',
        borderR = 'normal',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(cls.Card, mods, [
                className,
                cls[paddingClass],
                cls[variant],
                cls[borderR],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
