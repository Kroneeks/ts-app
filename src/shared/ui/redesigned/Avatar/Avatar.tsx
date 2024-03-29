import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import UserIcon from '@/shared/assets/icons/user-filled.svg?react';
import { Icon } from '../Icon';
import { useMemo, type CSSProperties } from 'react';
import { AppImage } from '../../redesigned/AppImage/AppImage';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
    size?: number;
}

const Avatar = (props: AvatarProps) => {
    const { className = '', src, alt = 'Sign a picture', size = 100 } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} borderR="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

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
