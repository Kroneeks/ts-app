import { classNames } from '@/shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/redesigned/Button';

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
                variant="clear"
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    },
);

LangSwitcher.displayName = 'LangSwitcher';

export { LangSwitcher };
