import {AuthorizationStatus} from '../../consts';
import Logo from '../logo/logo';
import {useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/selectors';
import AuthUserList from '../auth-user-list/auth-user-list';
import NonAuthUserList from '../non-auth-user-list/non-auth-user-list';

function Header(): JSX.Element {
  const currentAuthStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            {currentAuthStatus === AuthorizationStatus.Auth
              ? <AuthUserList />
              : <NonAuthUserList />}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
