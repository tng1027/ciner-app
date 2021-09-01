import './App.css';
import 'semantic-ui-css/semantic.min.css'

import data from './data.json'
import { useState } from 'react';
import Person from './components/Person';
import Lonely from './components/Lonely';
import { Grid } from 'semantic-ui-react'
import Navbar from './components/Navbar';

const App = () => {
  const [people, setPeople] = useState(data);
  const [activeUser, setActiveUser] = useState({
    likedUsers: [],
    dislikedUsers: [],
    lovedUsers: []
  })

  const removedPersonFromDataSrc = (peopleSource, userId) => {
    return peopleSource.filter(person => person.id !== userId);
  }

  const makeDecision = (userId, action) => {
    switch (action) {
      case 'LIKE_USER':
        if (!activeUser.likedUsers.includes(userId)) {
          activeUser.likedUsers.push(userId)

          setActiveUser({ ...activeUser })
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'DISLIKE_USER':
        if (!activeUser.dislikedUsers.includes(userId)) {
          activeUser.dislikedUsers.push(userId)

          setActiveUser({ ...activeUser })
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'LOVE_USER':
        if (!activeUser.lovedUsers.includes(userId)) {
          activeUser.lovedUsers.push(userId)

          setActiveUser({ ...activeUser })
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  }

  const person = people[1];

  return (
    <>
      <Navbar visible={true} />

      <div className="app">
        <Grid columns='equal'>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={8}>
            {person ? (
              <Person person={person} makeDecision={makeDecision} />
            ) : (
              <Lonely people={data} activeUser={activeUser} />
            )}
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default App;
