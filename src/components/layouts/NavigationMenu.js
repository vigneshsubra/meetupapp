import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationMenu.module.css';
import FavoritesContext from '../../store/favorites-context';

function NavigationMenu() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups App</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetups</Link></li>
          <li><Link to='/new-meetup'>New Meetups</Link></li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;