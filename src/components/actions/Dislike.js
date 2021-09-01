import { Button, Icon } from 'semantic-ui-react';

const Dislike = ({ movieId, makeDecision }) => {
    return (
        <Button
            color="grey"
            onClick={() => makeDecision(movieId, 'DISLIKE_MOVIE')}>
            <Icon name='thumbs down' /> Dislike
        </Button>
    )
}

export default Dislike;