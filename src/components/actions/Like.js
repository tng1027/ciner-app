const Like = ({ userId, modifySuperficialChoices }) => {
    return (
        <button
            type="button"
            onClick={() => modifySuperficialChoices(userId, 'ADD_LIKED_USER')}>
            <img src="images/misc/like.png" alt="Like User" />
        </button>
    )
}

export default Like;