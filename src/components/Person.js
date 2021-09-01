import React from 'react';
import Actions from './Actions';
import { Card, Image } from 'semantic-ui-react'

const Person = ({ person, makeDecision }) => {
  const { name, desc, age, image } = person;

  return (
    <>
      <Card className="person">
        <Image src={`/images/users/${image}`} alt={name} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{age}</span>
          </Card.Meta>
          <Card.Description>
            {desc}
          </Card.Description>
        </Card.Content>
      </Card>

      <Actions
        person={person}
        makeDecision={makeDecision}
      />
    </>
  );
};

export default Person;