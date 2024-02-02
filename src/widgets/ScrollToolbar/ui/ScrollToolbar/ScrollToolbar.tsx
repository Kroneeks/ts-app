import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ScrollToolbarProps {
    className?: string;
}

const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});

ScrollToolbar.displayName = 'ScrollToolbar';

export { ScrollToolbar };
