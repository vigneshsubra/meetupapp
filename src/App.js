import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layouts from './components/layouts/Layouts';

function App() {
  return (
    <Layouts>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layouts>
  );

}

export default App;
