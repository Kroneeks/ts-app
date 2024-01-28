import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { type ReactNode, memo, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, type FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    direction?: FlexDirection;
    onTabClick: (tab: TabItem) => void;
}

const Tabs = memo((props: TabsProps) => {
    const {
        className = '',
        tabs,
        onTabClick,
        value,
        direction = 'row',
    } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        key={tab.value}
                        className={classNames(cls.tab, {
                            [cls.seleted]: isSelected,
                        })}
                        variant={isSelected ? 'light' : 'normal'}
                        borderR="xl-round"
                        onClick={clickHandle(tab)}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});

Tabs.displayName = 'Tabs';

export { Tabs };
