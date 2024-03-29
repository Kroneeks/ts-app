import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '@/entities/Article/model/consts/consts';
import { memo } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className = '', view } = props;

    const mainClass = cls.ArticleListItemRedesigned;

    const Skeleton = SkeletonRedesigned;

    const Card = CardRedesigned;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton borderR="50%" height={70} width={70} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton width={250} height={32} className={cls.title} />
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={250} className={cls.img} />
                    <Skeleton height={204} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={46} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});

ArticleListItemSkeleton.displayName = 'ArticleListItem';

export { ArticleListItemSkeleton };
