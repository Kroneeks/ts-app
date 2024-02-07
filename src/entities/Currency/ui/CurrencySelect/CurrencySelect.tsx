import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.BLR, content: Currency.BLR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.GBP, content: Currency.GBP },
];

const CurrencySelect = memo(
    ({
        className = '',
        value,
        readonly = true,
        onChange,
    }: CurrencySelectProps) => {
        const { t } = useTranslation('profilePage');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        const props = {
            className,
            value,
            defaultValue: t('Укажите валюту'),
            label: t('Укажите валюту'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return <ListBox {...props} />;
    },
);

CurrencySelect.displayName = 'CurrencySelect';

export { CurrencySelect };
