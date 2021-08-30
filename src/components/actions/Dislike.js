const Dislike = ({ userId, modifySuperficialChoices }) => {
    return (
        <button
            type="button"
            onClick={() => modifySuperficialChoices(userId, 'ADD_DISLIKED_USER')}>
            <img src="images/misc/dislike.png" alt="Dislike User" />
        </button>
    )
}

export default Dislike;