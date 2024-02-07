import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');

    if (!id) {
        return null;
    }

    // const articleRatingCard = toggleFeatures({
    // name: 'isArticleRatingEnabled',
    // on: () => <ArticleRating articleId={id} />,
    // off: () => <Card>{t('Оценка статей скоро появится')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                                    content={
                                        <Page
                                            className={classNames(
                                                cls.ArticleDetailsPage,
                                                {},
                                                [className],
                                            )}
                                        >
                                            <VStack gap="16" max>
                                                <DetailsContainer />
                                                <ArticleRating articleId={id} />
                                                <ArticleRecommendationsList />
                                                <ArticleDetailsComments id={id} />
                                            </VStack>
                                        </Page>
                                    }
                                    right={<AdditionalInfoContainer />}
                                />
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
