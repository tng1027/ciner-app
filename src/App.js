import './App.css';
import 'semantic-ui-css/semantic.min.css'

import dataSource from './data.json'
import { useState } from 'react';
import Movie from './components/Movie';
import Empty from './components/Empty';
import { Grid } from 'semantic-ui-react'
import Navbar from './components/Navbar';

const App = () => {
  const [movies, setMovies] = useState(dataSource);
  const [activeUser, setActiveUser] = useState({
    liked: [],
    disliked: [],
    loved: []
  });

  const removedmovieFromDataSrc = (source, movieId) => {
    return source.filter(movie => movie.imdbID !== movieId);
  }

  const makeDecision = (movieId, action) => {
    switch (action) {
      case 'LIKE_MOVIE':
        if (!activeUser.liked.includes(movieId)) {
          activeUser.liked.push(movieId)

          setActiveUser({ ...activeUser })
          setMovies(removedmovieFromDataSrc(movies, movieId));
        }
        break;
      case 'DISLIKE_MOVIE':
        if (!activeUser.disliked.includes(movieId)) {
          activeUser.disliked.push(movieId)

          setActiveUser({ ...activeUser })
          setMovies(removedmovieFromDataSrc(movies, movieId));
        }
        break;
      case 'LOVE_MOVIE':
        if (!activeUser.loved.includes(movieId)) {
          activeUser.loved.push(movieId)

          setActiveUser({ ...activeUser })
          setMovies(removedmovieFromDataSrc(movies, movieId));
        }
        break;
      default:
        return movies;
    }
  }

  const movie = movies[0];

  return (
    <>
      <Navbar visible={true} />

      <div className="app">
        <Grid columns='equal'>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={6}>
            {movie ? (
              <Movie movie={movie} makeDecision={makeDecision} />
            ) : (
              <Empty source={dataSource} activeUser={activeUser} />
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
