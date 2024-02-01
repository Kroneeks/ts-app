import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleDetails.module.scss';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import CalendarIcon from '@/shared/assets/icons/calendar.svg?react';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { renderArticleBlock } from './renderBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <AvatarDeprecated
                    size={100}
                    src={article?.img ?? ''}
                    className={cls.avatar}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    title={article?.title}
                    text={article?.subtitle}
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated Svg={EyeIcon} width="20px" height="20px" />
                    <TextDeprecated
                        size={TextSize.S}
                        text={String(article?.views)}
                    />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated
                        Svg={CalendarIcon}
                        width="20px"
                        height="20px"
                    />
                    <TextDeprecated
                        size={TextSize.S}
                        text={article?.createdAt}
                    />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={
                    <Skeleton width="100%" height={420} borderR={'16px'} />
                }
                src={article?.img ?? ''}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const { className = '', id } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderR={'50%'}
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
                text={error}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';

export { ArticleDetails };
