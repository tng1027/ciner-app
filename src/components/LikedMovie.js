import { Card, Header, Image } from 'semantic-ui-react'

const LikedMovie = ({ movie }) => {
    const { Title, Released, Poster } = movie;
    return (
        <Card className="liked-person">
            <Image src={Poster} alt={`You liked ${Title}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header><Header size='tiny'>{Title}</Header></Card.Header>
                <Card.Meta>
                    <span className='date'>{Released}</span>
                </Card.Meta>
            </Card.Content>
        </Card>);
}

export default LikedMovie;