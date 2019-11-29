import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import Instructors from "./Instructors";
import Courses from "./Courses";
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class CourseCard extends React.Component {
    classes = useStyles;

    static propTypes = {
        handleOnClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <Card className={this.classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={this.classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent onClick={this.props.handleOnClick}>
                        <Switch>
                            <Route exact path='/manabu/api/v1/courses' component={Courses}/>
                            <Route path='/manabu/api/v1/instructors' component={Instructors}/>
                        </Switch>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default CourseCard;



