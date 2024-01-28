import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/redesigned/Icon';
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

        return <Icon Svg={ThemeIcon} onClick={onToggleHandler} clickable />;
    },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
