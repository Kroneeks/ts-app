import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import useDeviceDetection from '@/shared/lib/hooks/useDeviceDetection/useDeviceDetection'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

const RatingCard = memo((props: RatingCardProps) => {
  const {
    className = '',
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onCancel,
    onAccept
  } = props
  const { t } = useTranslation('rating')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')
  const device = useDeviceDetection()

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [onAccept, hasFeedback])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, starsCount, onAccept])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [starsCount, onCancel])

  const modalContent = (
      <>
          <Text title={feedbackTitle} />
          <Input
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
            />
      </>
  )

  return (
      <Card className={classNames('', {}, [className])} max>
          <VStack align='center' gap='8'>
              <Text title={starsCount ? t('Спасибо за оценку') : title} />
              <StarRating selectedStars={starsCount} size={50} onSelect={onSelectStars} />
          </VStack>
          {
                device === 'Mobile'
                  ? (
                      <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
                          <VStack gap='32'>
                              {modalContent}
                              <Button fullWidth onClick={acceptHandle}>
                                  {t('Отправить')}
                              </Button>
                          </VStack>
                      </Drawer>
                    )
                  : (
                      <Modal isOpen={isModalOpen} lazy>
                          {modalContent}
                          <HStack max gap='16' justify='end'>
                              <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandle}>
                                  {t('Закрыть')}
                              </Button>
                              <Button onClick={acceptHandle}>
                                  {t('Отправить')}
                              </Button>
                          </HStack>
                      </Modal>
                    )
            }
      </Card>
  )
})

RatingCard.displayName = 'RatingCard'

export { RatingCard }
