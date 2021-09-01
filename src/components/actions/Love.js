import { Button, Icon } from 'semantic-ui-react';

const Love = ({ userId, makeDecision }) => {
    return (
        <Button
            color="red"
            onClick={() => makeDecision(userId, 'LOVE_USER')}>
            <Icon name='heart' /> Love
        </Button>
    )
}

export default Love;