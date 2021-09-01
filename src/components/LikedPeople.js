import { Grid } from 'semantic-ui-react'
import LikedPerson from './LikedPerson'

const LikedPeople = ({ users }) => {
    return (
        <Grid columns={4}>
            {users.map((user, index) => <Grid.Column key={index}>
                <LikedPerson person={user} />
            </Grid.Column>)}
        </Grid>
    )
}

export default LikedPeople;