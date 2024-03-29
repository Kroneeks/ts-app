import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '@/pages/ArticleDetailsPage/model/selectors/article';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className = '' } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [navigate, article]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';

export { ArticleDetailsPageHeader };
