import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

const PageLoader = ({ className = '' }: PageLoaderProps): React.ReactElement => {
  return (
      <div data-testid='PageLoader' className={classNames(cls.PageLoader, {}, [className])}>
          <Loader />
      </div>
  )
}

export { PageLoader }
