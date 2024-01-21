import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

const Icon = memo((props: IconProps) => {
    const { className = '', Svg, inverted, ...otherProps } = props;

    const mods: Mods = {
        [cls.inverted]: inverted,
    };

    return (
        <Svg
            className={classNames(cls.Icon, mods, [className])}
            {...otherProps}
        />
    );
});

Icon.displayName = 'Icon';

export { Icon };
