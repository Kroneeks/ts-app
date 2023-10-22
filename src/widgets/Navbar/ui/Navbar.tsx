import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className = '' }: NavbarProps): React.ReactElement => {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={classNames(cls.links)}>
              /
          </div>
      </div>
  )
}

export { Navbar }
