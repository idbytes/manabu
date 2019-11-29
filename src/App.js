import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/common/header';
import CourseCard from './components/CourseCard';
import Courses from "./components/Courses";
import Home from './components/Home';
import {Route, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            isClicked: false,
            courseList: []
        };

    }

    handleOnClick() {
        this.setState({isClicked: true});
        //window.location = 'https://en.wikipedia.org/wiki/Lizard';
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        axios.get('http://localhost:8000/manabu/api/v1/course')
            .then(jsonResp => {
                console.dir(jsonResp);
                this.setState({ courseList: jsonResp.data.data})
            })
            .catch((err)=>{console.dir(err)})
    }

    render() {
        return (

            <div>
                <Header name="Manabu"/>
                <div>
                    {/*{this.state.courseList && this.state.courseList.length >0 ?  this.state.courseList[0].name:""}*/}
                    {/*{this.state.isClicked ?*/}
                    {/*    <div>gone girl </div> :*/}
                    <BrowserRouter>
                        <Route path="/" exact component={Home}/>
                        <Route path="/manabu/" exact component={Home}/>
                        <Route path="/manabu/courses" component={(props) => <CourseCard {...props} handleOnClick={this.handleOnClick}  courseList={this.state.courseList} />}/>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default App;
