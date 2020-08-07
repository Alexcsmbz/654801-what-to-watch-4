interface IProps {
  className?: string,
  tab?: {
    name: string,
  },
  onClick?: () => void,
}

const NavTab: React.FC<IProps> = ({tab, className, onClick}: IProps) =>
  <li onClick={onClick} className={`movie-nav__item ${className}`}>
    <div className="movie-nav__link">{tab.name}</div>
  </li>;

export default NavTab;
