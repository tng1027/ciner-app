import { Button, Icon } from 'semantic-ui-react';

const Like = ({ userId, makeDecision }) => {
    return (
        <Button
            color="orange"
            onClick={() => makeDecision(userId, 'LIKE_USER')}>
            <Icon name='thumbs up' /> Like
        </Button>
    )
}

export default Like;