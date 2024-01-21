import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: Array<SelectOption<T>>;
    value?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className = '',
        label = '',
        value,
        options,
        readonly = true,
        onChange,
    } = props;

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option key={opt.value} className={cls.option} value={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange?.(e.target.value as T);
        }
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};

export { Select };
