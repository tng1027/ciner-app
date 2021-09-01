import { Grid } from 'semantic-ui-react'
import LikedMovie from './LikedMovie'

const LikedMovies = ({ movies }) => {
    return (
        <Grid columns={4}>
            {movies.map((movie, index) => <Grid.Column key={index}>
                <LikedMovie movie={movie} />
            </Grid.Column>)}
        </Grid>
    )
}

export default LikedMovies;