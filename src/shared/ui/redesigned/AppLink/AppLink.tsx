import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { NavLink, type LinkProps } from 'react-router-dom';
import { memo } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: React.ReactNode;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className = '',
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

AppLink.displayName = 'AppLink';

export { AppLink };
