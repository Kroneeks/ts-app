import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { type ReactNode, memo, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const Tabs = memo((props: TabsProps) => {
    const { className = '', tabs, onTabClick, value } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';

export { Tabs };
