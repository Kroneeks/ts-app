import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { memo, useState } from 'react'
import { Icon, type IconSize } from '../Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg?react'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: IconSize
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

const StarRating = memo((props: StarRatingProps) => {
  const { className = '', size, selectedStars = 0, onSelect } = props

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
      <div className={classNames(cls.StarRating, {}, [className])}>
          {stars.map(starNumber => (
              <Icon
                  Svg={StarIcon}
                  key={starNumber}
                  className={classNames(
                    cls.starRating,
                    {
                      [cls.normal]: currentStarsCount < starNumber,
                      [cls.isHovered]: currentStarsCount < starNumber,
                      [cls.selected]: isSelected
                    }
                  )}
                  size={size}
                  onMouseLeave={onLeave}
                  onMouseEnter={onHover(starNumber)}
                  onClick={onClick(starNumber)}
                />
          ))}
      </div>
  )
})

StarRating.displayName = 'StarRating'

export { StarRating }
