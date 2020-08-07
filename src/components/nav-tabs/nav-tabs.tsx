interface IProps {
  children: JSX.Element[] | JSX.Element,
}

const NavTabs: React.FC<IProps> = ({children}: IProps) =>
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {children}
    </ul>
  </nav>;

export default NavTabs;
