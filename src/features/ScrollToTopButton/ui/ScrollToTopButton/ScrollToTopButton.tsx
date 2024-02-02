import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import FilledArrow from '@/shared/assets/icons/fillArrow.svg';

interface scrollToTopButtonProps {
    className?: string;
}

const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    const onClick = () => {
        console.log(1);
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={FilledArrow}
            onClick={onClick}
            width={32}
            height={32}
            clickable
            className={classNames(cls.scrollToTopButton, {}, [className])}
        />
    );
});

ScrollToTopButton.displayName = 'scrollToTopButton';

export { ScrollToTopButton };
