import './App.css';
import 'semantic-ui-css/semantic.min.css'

import data from './data.json'
import { useState } from 'react';
import Person from './components/Person';
import Lonely from './components/Lonely';
import { Grid } from 'semantic-ui-react'
import Navbar from './components/Navbar';

const App = () => {
  const [isNavbarShow, setIsNavbarShow] = useState(true);
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [lovedUsers, setLovedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) => {
    return peopleSource.filter(person => person.id !== userId);
  }

  const makeDecision = (userId, action) => {
    const newPeople = [...people];

    switch (action) {
      case 'LIKE_USER':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId)

          setLikedUsers([...likedUsers, data[userId]]);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'DISLIKE_USER':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId)

          setDislikedUsers([...dislikedUsers, data[userId]]);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'LOVE_USER':
        if (!people[activeUser].lovedUsers.includes(userId)) {
          newPeople[activeUser].lovedUsers.push(userId)

          setLovedUsers([...lovedUsers, data[userId]]);
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
      <Navbar visible={isNavbarShow} />

      <div className="app">
        <Grid columns='equal'>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={8}>
            {person ? (
              <Person
                person={person}
                makeDecision={makeDecision}
              />
            ) : (
              <Lonely
                activeUserImage={people[activeUser].image}
                dislikedUsers={dislikedUsers}
                likedUsers={likedUsers}
                lovedUsers={lovedUsers} />
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
