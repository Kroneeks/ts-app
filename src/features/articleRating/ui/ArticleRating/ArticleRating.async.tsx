import { Suspense, lazy } from 'react';
import { type ArticleRatingProps } from './ArticleRating';
import { Loader } from '@/shared/ui/deprecated/Loader';

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Loader />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
