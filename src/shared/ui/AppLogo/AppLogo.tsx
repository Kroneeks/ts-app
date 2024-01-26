import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { memo } from 'react';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/home.svg';
import { Icon } from '../Icon';

interface AppLogoProps {
    className?: string;
}

const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <Icon
                Svg={AppSvg}
                height="100px"
                width="100px"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});

AppLogo.displayName = 'AppLogo';

export { AppLogo };
