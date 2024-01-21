import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = memo(
    ({
        className = '',
        short = false,
    }: LangSwitcherProps): React.ReactElement => {
        const { t, i18n } = useTranslation();

        const toggle = (): void => {
            void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    },
);

LangSwitcher.displayName = 'LangSwitcher';

export { LangSwitcher };
