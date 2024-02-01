import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import useDeviceDetection from '@/shared/lib/hooks/useDeviceDetection/useDeviceDetection';
import {
    Drawer,
    Drawer as DrawerDeprecated,
} from '@/shared/ui/redesigned/Drawer';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

const RatingCard = memo((props: RatingCardProps) => {
    const {
        className = '',
        title,
        feedbackTitle,
        hasFeedback,
        rate = 0,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation('rating');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const device = useDeviceDetection();

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [onAccept, hasFeedback],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, starsCount, onAccept]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
        />
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames('', {}, [className])}
                    max
                    borderR="xl-round"
                    padding="24"
                    data-testid="RatingCard"
                >
                    <VStack align="center" gap="8">
                        <Text
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={50}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    {device === 'Mobile' ? (
                        <Drawer
                            isOpen={isModalOpen}
                            onClose={cancelHandle}
                            lazy
                        >
                            <VStack gap="32">
                                {modalContent}
                                <Button fullWidth onClick={acceptHandle}>
                                    {t('Отправить')}
                                </Button>
                            </VStack>
                        </Drawer>
                    ) : (
                        <Modal isOpen={isModalOpen} lazy>
                            {modalContent}
                            <HStack max gap="16" justify="end">
                                <Button
                                    variant="outline_red"
                                    onClick={cancelHandle}
                                    data-testid="RatingCard.Close"
                                >
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={acceptHandle}
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </Modal>
                    )}
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames('', {}, [className])}
                    max
                    data-testid="RatingCard"
                >
                    <VStack align="center" gap="8">
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={50}
                            onSelect={onSelectStars}
                        />
                    </VStack>
                    {device === 'Mobile' ? (
                        <DrawerDeprecated
                            isOpen={isModalOpen}
                            onClose={cancelHandle}
                            lazy
                        >
                            <VStack gap="32">
                                {modalContent}
                                <ButtonDeprecated
                                    fullWidth
                                    onClick={acceptHandle}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </VStack>
                        </DrawerDeprecated>
                    ) : (
                        <Modal isOpen={isModalOpen} lazy>
                            {modalContent}
                            <HStack max gap="16" justify="end">
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={cancelHandle}
                                    data-testid="RatingCard.Close"
                                >
                                    {t('Закрыть')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    onClick={acceptHandle}
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </HStack>
                        </Modal>
                    )}
                </CardDeprecated>
            }
        />
    );
});

RatingCard.displayName = 'RatingCard';

export { RatingCard };
