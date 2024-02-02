import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import { type ForwardedRef, forwardRef } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: React.ReactNode;
    theme?: AppLinkTheme;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            to,
            className = '',
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;

        return (
            <Link
                to={to}
                className={classNames(cls.AppLink, {}, [className, cls[theme]])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);

AppLink.displayName = 'AppLink';

export { AppLink };
