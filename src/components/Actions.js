import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Love from './actions/Love';

const Actions = ({ person, makeDecision }) => {
    const userId = person.id;

    return (<div id="actions">
        <Dislike
            userId={userId}
            makeDecision={makeDecision}
        />
        <Like
            userId={userId}
            makeDecision={makeDecision}
        />
        <Love
            userId={userId}
            makeDecision={makeDecision}
        />
    </div>)
};

export default Actions;