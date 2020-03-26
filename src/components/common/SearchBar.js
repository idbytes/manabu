import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

let classes = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
};

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }
    render(){
        return (
            <Paper component="form" className={classes.root}>

                <InputBase
                    className={classes.input}
                    placeholder="Search for courses by course titles"
                    onChange = {(event) => this.props.onChange(event)}
                    inputProps={{ 'aria-label': 'search google maps' }}

                />
                <IconButton type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                            onClick={(event) => {this.props.onSubmit(event)}}
                >
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                </IconButton>
            </Paper>
        );
    }
}

export default SearchBar;