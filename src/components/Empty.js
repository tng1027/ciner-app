import { Header } from "semantic-ui-react";
import LikedMovies from "./LikedMovies";

const Empty = ({ source, activeUser }) => {
    const { liked, loved, disliked } = activeUser;

    const getMovies = (ids) => {
        return source.filter(movie => ids.some(id => id === movie.imdbID))
    }

    return (
        <div className="lonely">
            <div id="liked-people">
                <Header size='small'>{liked.length > 0 && "Movies you liked"}</Header>

                {liked.length > 0 && <LikedMovies movies={getMovies(liked)} />}

                <Header size='small'>{loved.length > 0 && "Movies you loved"}</Header>

                {loved.length > 0 && <LikedMovies movies={getMovies(loved)} />}

                <Header size='small'>{disliked.length > 0 && "Movies you loved"}</Header>

                {disliked.length > 0 && <LikedMovies movies={getMovies(disliked)} />}
            </div>
        </div>
    )
}

export default Empty;