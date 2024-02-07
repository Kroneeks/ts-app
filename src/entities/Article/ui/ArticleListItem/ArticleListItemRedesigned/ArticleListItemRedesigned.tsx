import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { type ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { ARTICLE_LIST_ITEM_LOCASTORAGE_IDX } from '@/shared/const/localstorage';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { type ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className = '', article, view, target = '_blank', index } = props;
    const { t } = useTranslation('article');

    const userInfo = (
        <>
            <Avatar
                size={32}
                src={article.user.avatar ?? ''}
                className={cls.avatar}
            />
            <Text text={article.user.username} bold />
        </>
    );
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} width="20px" height="20px" />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    const handleButtonClick = () => {
        if (index) {
            sessionStorage.setItem(
                ARTICLE_LIST_ITEM_LOCASTORAGE_IDX,
                JSON.stringify(index),
            );
        }
    };

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
                padding="24"
                max
            >
                <VStack max gap="16">
                    <HStack gap="8">
                        <Avatar size={32} src={article.user?.avatar ?? ''} />
                        <Text text={article.user.username} bold />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" bold />
                    <AppImage
                        fallback={<Skeleton width="100%" height="250px" />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button
                                variant="outline"
                                onClick={handleButtonClick}
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            target={target}
            data-testid="ArticleListItem"
        >
            <Card className={cls.card} borderR="xl-round" padding="0">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                />
                <VStack className={cls.info} gap="4">
                    <Text
                        title={article.title}
                        className={cls.title}
                        size="s"
                    />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});

ArticleListItemRedesigned.displayName = 'ArticleListItemRedesigned';

export { ArticleListItemRedesigned };
