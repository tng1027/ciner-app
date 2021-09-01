const Like = ({ userId, makeDecision }) => {
    return (
        <button
            type="button"
            onClick={() => makeDecision(userId, 'LIKE_USER')}>
            <img src="images/misc/like.png" alt="Like User" />
        </button>
    )
}

export default Like;