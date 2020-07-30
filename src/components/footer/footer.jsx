import Logo from 'components/logo/logo.jsx';

const Footer = (props) => {

  return <footer className="page-footer">
    <Logo className="logo__link--light" />

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>;
};

export default Footer;
