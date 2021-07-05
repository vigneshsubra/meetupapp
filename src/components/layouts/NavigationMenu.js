import { Link } from 'react-router-dom';

import classes from './NavigationMenu.module.css';

function NavigationMenu(){
  return (
    <header className = {classes.header}>
      <div className={classes.logo}>Meetups App</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetups</Link></li>
          <li><Link to='/new-meetup'>New Meetups</Link></li>
          <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;