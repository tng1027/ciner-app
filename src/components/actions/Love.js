const Love = ({ userId, modifySuperficialChoices }) => {
    return (
        <button
            type="button"
            onClick={() => modifySuperficialChoices(userId, 'ADD_LOVED_USER')}>
            <img src="images/misc/love.png" alt="Love User" />
        </button>
    )
}

export default Love;