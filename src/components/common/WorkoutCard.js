import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
        fontWeight: 700,
        marginTop: 'auto',
    },
})

const WorkoutCard = ({ workout, classes }) => ( 
    <Card className={ classes.card }>
        <CardContent>
            <Typography color="textSecondary">
                { workout.bodyParts.map( part => `${ part.fields.bodyParts } ` ) }
            </Typography>
            <Typography variant="h6">
                { workout.workoutTitle }
            </Typography>
        </CardContent>
        <CardActions>
            <Link
                to={ `/workout/${ workout.id }` }
            >
                <Button 
                    size="small"
                    className={ classes.button } 
                >Details</Button>
            </Link>
        </CardActions>
    </Card>
)

export default withStyles( styles )( WorkoutCard )
