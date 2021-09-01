import { Button, Icon } from 'semantic-ui-react';

const Love = ({ movieId, makeDecision }) => {
    return (
        <Button
            color="red"
            onClick={() => makeDecision(movieId, 'LOVE_MOVIE')}>
            <Icon name='heart' /> Love
        </Button>
    )
}

export default Love;