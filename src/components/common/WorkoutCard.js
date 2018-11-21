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
    },
    cardContent: {
        flexGrow: 1,
    },
    title: {
        fontSize: 14,
    },
    cardActions: {
        marginTop: 'auto',
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        fontWeight: 700,
    },
})

const WorkoutCard = ({ workout, classes }) => ( 
    <Card className={ classes.card }>
        <CardContent className={ classes.cardContent }>
            <Typography color="textSecondary">
                { workout.bodyParts.map( part => `${ part.fields.bodyParts } ` ) }
            </Typography>
            <Typography variant="h6">
                { workout.workoutTitle }
            </Typography>
        </CardContent>
        <CardActions className={ classes.cardActions }>
            <Link
                className={ classes.link }
                to={ `/workout/${ workout.id }` }
            >
                <Button 
                    size="small"
                    color="secondary"
                    className={ classes.button } 
                >Details</Button>
            </Link>
        </CardActions>
    </Card>
)

export default withStyles( styles )( WorkoutCard )
