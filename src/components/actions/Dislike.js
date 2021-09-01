const Dislike = ({ userId, makeDecision }) => {
    return (
        <button
            type="button"
            onClick={() => makeDecision(userId, 'DISLIKE_USER')}>
            <img src="images/misc/dislike.png" alt="Dislike User" />
        </button>
    )
}

export default Dislike;