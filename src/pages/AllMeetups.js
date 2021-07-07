import { useState, useEffect } from 'react';

import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://meetup-app-98af3-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  return (
    <section>
      {isLoading ? <p>Loading...</p> : (
        <div>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </div>
      )}
    </section>
  );
}

export default AllMeetupsPage;