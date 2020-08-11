import {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Logo from 'components/logo/logo.tsx';
import Footer from 'components/footer/footer.tsx';
import Button from 'components/button/button.tsx';

interface IProps {
  onSignIn: (email: string, password: string) => void,
  message: string,
  isAuth: boolean,
}

const SignIn: React.FC<IProps> = ({onSignIn, message, isAuth}: IProps) => {
  const _emailRef = useRef(null);
  const _passwordRef = useRef(null);
  const {push} = useHistory();

  const onSubmit = () => {
    onSignIn(_emailRef.current.value, _passwordRef.current.value);
  };

  useEffect(() => {
    if (isAuth) {
      push(`/`);
    }
  });

  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form">
        {message && <div className="sign-in__message">
          <p>{message}</p>
        </div>}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${message ? `sign-in__field--error` : ``}`}>
            <input ref={_emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input ref={_passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
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

const MemoizedSignIn = React.memo(SignIn);

export default MemoizedSignIn;
