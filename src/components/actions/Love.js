const Love = ({ userId, makeDecision }) => {
    return (
        <button
            type="button"
            onClick={() => makeDecision(userId, 'LOVE_USER')}>
            <img src="images/misc/love.png" alt="Love User" />
        </button>
    )
}

export default Love;