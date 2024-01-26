import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg?react';
import ThemeIcon from '@/shared/assets/icons/palette.svg?react';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(
    ({ className = '' }: ThemeSwitcherProps): React.ReactElement => {
        const { theme, toggleTheme } = useTheme();
        const dispatch = useAppDispatch();

        const onToggleHandler = useCallback(() => {
            toggleTheme((newTheme) => {
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [toggleTheme, dispatch]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Icon Svg={ThemeIcon} onClick={onToggleHandler} clickable />
                }
                off={
                    <ButtonDeprecated
                        onClick={onToggleHandler}
                        className={classNames(cls.ThemeSwitcher, {}, [
                            className,
                        ])}
                        theme={ButtonTheme.CLEAR}
                    >
                        <IconDeprecated
                            Svg={ThemeIconDeprecated}
                            width={40}
                            height={40}
                        />
                    </ButtonDeprecated>
                }
            />
        );
    },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
