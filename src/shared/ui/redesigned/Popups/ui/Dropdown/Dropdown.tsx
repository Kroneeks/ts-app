import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment, type ReactNode } from 'react';
import { type DropDownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className = '',
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            type="button"
                            key={`${item.href}_keybtn`}
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={`${item.href}_keylink`}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={`${item.href}_keyitem`}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
