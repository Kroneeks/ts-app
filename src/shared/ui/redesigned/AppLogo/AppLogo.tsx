import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { memo } from 'react';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/home.svg';

interface AppLogoProps {
    className?: string;
    size?: number;
}

const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <AppSvg
                height={size}
                width={size}
                color="black"
                className={cls.appLogo}
            />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});

AppLogo.displayName = 'AppLogo';

export { AppLogo };
