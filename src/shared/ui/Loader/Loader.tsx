import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

const Loader = ({ className = '' }: LoaderProps): React.ReactElement => {
  return (
      <div className={classNames('lds-default', {}, [className])}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
      </div>
  )
}

export { Loader }
