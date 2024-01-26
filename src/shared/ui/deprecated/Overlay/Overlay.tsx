import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});

Overlay.displayName = 'Overlay';

export { Overlay };
