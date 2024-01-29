import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    memo,
    type InputHTMLAttributes,
    useRef,
    useState,
    useEffect,
    type ReactNode,
} from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    type?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    placeholder?: string;
    'data-testid'?: string;
    autofocus?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

const Input = memo((props: InputProps) => {
    const {
        className = '',
        value = '',
        type = 'text',
        placeholder = '',
        onChange,
        readonly = false,
        'data-testid': dataTestId = '',
        autofocus = false,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                onChange={onChangeHandler}
                placeholder={placeholder}
                data-testid={dataTestId}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );
});

Input.displayName = 'Input';

export { Input };
