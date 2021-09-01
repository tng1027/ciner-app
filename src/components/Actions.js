import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Love from './actions/Love';

const Actions = ({ movie, makeDecision }) => {
    const { imdbID } = movie;

    return (<div id="actions">
        <Dislike
            movieId={imdbID}
            makeDecision={makeDecision}
        />
        <Like
            movieId={imdbID}
            makeDecision={makeDecision}
        />
        <Love
            movieId={imdbID}
            makeDecision={makeDecision}
        />
    </div>)
};

export default Actions;