import {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import Logo from 'components/logo/logo.jsx';
import Footer from 'components/footer/footer.jsx';
import Button from 'components/button/button.jsx';

const SignIn = (props, context) => {
  const {onSignIn} = props;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const onSubmit = () => {
    onSignIn(emailRef.current.value, passwordRef.current.value);
    history.push(`/`);
  };

  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form">
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <Button
            button={{
              name: `Sign in`,
              onClick: onSubmit,
              className: `sign-in__btn`
            }}
          />
        </div>
      </form>
    </div>
    <Footer />
  </div>;
};

SignIn.propTypes = {
  onSignIn: propTypes.func,
};

export default SignIn;
