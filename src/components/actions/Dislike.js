import { Button, Icon } from 'semantic-ui-react';

const Dislike = ({ userId, makeDecision }) => {
    return (
        <Button
            color="grey"
            onClick={() => makeDecision(userId, 'DISLIKE_USER')}>
            <Icon name='thumbs down' /> Dislike
        </Button>
    )
}

export default Dislike;