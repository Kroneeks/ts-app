import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

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
            <Button
                onClick={onToggleHandler}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
            >
                {theme === Theme.DARK ? (
                    <DarkIcon width={30} height={30} />
                ) : (
                    <LightIcon width={30} height={30} />
                )}
            </Button>
        );
    },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
