import './App.css';

import data from './data.json'
import { useState } from 'react';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [lovedUsers, setLovedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) => {
    return peopleSource.filter(person => person.id !== userId);
  }

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    // const newLikedUsers = [...likedUsers];
    // const newLovedUsers = [...lovedUsers];
    // const newDislikeUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_LIKED_USER':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId)

          setLikedUsers([...likedUsers, data[userId]]);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_DISLIKED_USER':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId)

          setDislikedUsers([...dislikedUsers, data[userId]]);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_LOVED_USER':
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

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySupercialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          lovedUsers={lovedUsers} />
      )}
    </div>
  );
}

export default App;
