import './App.css';
import 'semantic-ui-css/semantic.min.css'

import data from './data.json'
import { useState } from 'react';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';

const App = () => {
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
    <div className="app">
      <Header />

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
    </div>
  );
}

export default App;
