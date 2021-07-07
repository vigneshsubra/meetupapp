import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import BaseCard from '../ui/BaseCard';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    }
    else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        description: props.description,
        address: props.address
      });
    }
  }

  return (
    <BaseCard>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove Favorite' : 'Add as Favorite'}</button>
        </div>
      </li>
    </BaseCard>
  );
}

export default MeetupItem;