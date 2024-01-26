import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import UserIcon from '@/shared/assets/icons/user-filled.svg?react';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { useMemo, type CSSProperties } from 'react';
import { AppImage } from '../AppImage/AppImage';

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const Avatar = (props: AvatarProps) => {
    const {
        className = '',
        src,
        alt = 'Sign a picture',
        size = 100,
        fallbackInverted = false,
    } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} borderR="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <div className={classNames(cls.Avatar, mods, [className])}>
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                alt={alt}
                style={styles}
            />
        </div>
    );
};

export { Avatar };
