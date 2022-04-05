import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';

function NonAuthUserList(): JSX.Element {
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

export default NonAuthUserList;
