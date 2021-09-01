import React from 'react';
import Actions from './Actions';
import { Card, Image } from 'semantic-ui-react'

const Movie = ({ movie, makeDecision }) => {
  const { Title, Plot, Released, Poster } = movie;

  return (
    <>
      <Card className="movie">
        <Image src={Poster} alt={Title} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{Title}</Card.Header>
          <Card.Meta>
            <span className='date'>{Released}</span>
          </Card.Meta>
          <Card.Description>
            {Plot}
          </Card.Description>
        </Card.Content>
      </Card>

      <Actions
        movie={movie}
        makeDecision={makeDecision}
      />
    </>
  );
};

export default Movie;