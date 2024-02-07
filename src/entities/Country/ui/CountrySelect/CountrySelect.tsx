import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Lithuania, content: Country.Lithuania },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.US, content: Country.US },
];

const CountrySelect = memo(
    ({
        className = '',
        value,
        readonly = true,
        onChange,
    }: CountrySelectProps) => {
        const { t } = useTranslation('profilePage');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const props = {
            className,
            value,
            defaultValue: t('Укажите страну'),
            label: t('Укажите страну'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return (
            <ListBox {...props} />
        );
    },
);

CountrySelect.displayName = 'CountrySelect';

export { CountrySelect };
