import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className = '' } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card borderR="sm-round" className={className} padding="24" max>
            <ArticleDetails id={id} />
        </Card>
    );
});

DetailsContainer.displayName = 'DetailsContainer';

export { DetailsContainer };
