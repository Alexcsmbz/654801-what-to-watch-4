interface IProps {
  children: Array<React.FC> | React.FC,
}

const NavTabs: React.FC<IProps> = ({ children }: IProps) =>
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {children}
    </ul>
  </nav>;

export default NavTabs;
