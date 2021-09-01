import { Card, Image } from 'semantic-ui-react'

const LikedPerson = ({ person }) => {
    return (
        <Card className="liked-person">
            <Image src={`/images/users/${person.image}`} alt={`You liked ${person.name}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{person.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{person.age}</span>
                </Card.Meta>
            </Card.Content>
        </Card>);
}

export default LikedPerson;