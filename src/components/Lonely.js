import LikedPerson from "./LikedPerson";

const Lonely = ({ activeUserImage, likedUsers, lovedUsers }) => {
    return (
        <div className="lonely">
            <p>There is no new around you.</p>

            <span className="pulse">
                <img src={`/images/users/${activeUserImage}`} alt="You..." />
            </span>

            <div id="liked-people">
                <p>
                    {likedUsers.length > 0 &&
                        "People you liked..."}
                </p>

                {likedUsers.map(item => (
                    <LikedPerson key={item.id} person={item} />
                ))}

                <p>{lovedUsers.length > 0 && 'People you loved'}</p>

                {lovedUsers.map(item => (
                    <LikedPerson key={item.id} person={item} />
                ))}
            </div>
        </div>
    )
}

export default Lonely;