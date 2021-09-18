import { useContext } from 'react';

import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <section>
      {favoriteCtx.totalFavorites === 0 ? <p>No favorites added yet! Start adding now?</p> : (
        <div>
          <h1>My Favotites!</h1>
          <MeetupList meetups={favoriteCtx.favorites} />
        </div>
      )}

    </section>
  );
}

export default FavoritesPage;