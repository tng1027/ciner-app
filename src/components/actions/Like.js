import { Button, Icon } from 'semantic-ui-react';

const Like = ({ movieId, makeDecision }) => {
    return (
        <Button
            color="orange"
            onClick={() => makeDecision(movieId, 'LIKE_MOVIE')}>
            <Icon name='thumbs up' /> Like
        </Button>
    )
}

export default Like;