import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg?react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon';

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
                <Icon Svg={ThemeIcon} width={40} height={40} />
            </Button>
        );
    },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
