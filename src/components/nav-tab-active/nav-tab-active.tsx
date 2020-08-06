import NavTab from 'components/nav-tab/nav-tab.tsx';

interface IProps {
  [key: string]: any
}

const NavTabActive: React.FC<IProps> = (props: IProps) => {
  const className = `movie-nav__item--active ${props.className || ``}`;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return <NavTab className={className} {...restProps}/>;
};

export default NavTabActive;
