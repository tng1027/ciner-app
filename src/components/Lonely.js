import { Header, Image } from "semantic-ui-react";
import LikedPeople from "./LikedPeople";

const Lonely = ({ people, activeUser }) => {
    const { likedUsers, lovedUsers } = activeUser;

    const getUsers = (ids) => {
        return people.filter(person => ids.some(id => id === person.id))
    }

    return (
        <div className="lonely">
            <span className="pulse">
                <Image src={`/images/misc/user.png`} alt="You..." />
            </span>

            <div id="liked-people">
                <Header size='small'>{likedUsers.length > 0 && "People you liked"}</Header>

                {likedUsers.length > 0 && <LikedPeople users={getUsers(likedUsers)} />}

                <Header size='small'>{lovedUsers.length > 0 && "People you loved"}</Header>

                {lovedUsers.length > 0 && <LikedPeople users={getUsers(lovedUsers)} />}
            </div>
        </div>
    )
}

export default Lonely;