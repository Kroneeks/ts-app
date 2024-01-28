import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { memo } from 'react';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import ListIconDeprecated from '@/shared/assets/icons/list.svg?react';
import BlockIcon from '@/shared/assets/icons/tiled.svg?react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ListIcon from '@/shared/assets/icons/burger.svg?react';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.BLOCK,
        icon: BlockIcon,
    },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className = '', view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    borderR="xl-round"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                clickable
                                onClick={onClick(viewType.view)}
                                className={classNames(
                                    '',
                                    {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    },
                                    [],
                                )}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                width="20px"
                                height="20px"
                                className={classNames(
                                    '',
                                    {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    },
                                    [],
                                )}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';

export { ArticleViewSelector };
