import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUser} from '../../store/selectors';
import {MouseEvent} from 'react';
import {logoutAction} from '../../store/api-action';
import {AppRoute} from '../../consts';
import {Link} from 'react-router-dom';

function AuthUserList(): JSX.Element {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleLogout = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`, borderRadius: '50%'}}/>
          <span className="header__user-name user__name">{user?.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a onClick={handleLogout} className="header__nav-link">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
}

export default AuthUserList;
