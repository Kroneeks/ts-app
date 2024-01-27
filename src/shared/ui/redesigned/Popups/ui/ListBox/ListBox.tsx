import { Fragment, type ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { type DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    id?: number;
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className = '',
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;
    const [selectedPerson, setSelectedPerson] = useState();

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <HStack gap="4">
            {label && <span>{label}</span>}
            <HListBox
                disabled={readonly}
                as={'div'}
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={selectedPerson}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={`${item.id}_box`}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    key={`${item.id}_item`}
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '>'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
