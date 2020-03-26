import React from 'react';
import CourseView from "../components/CourseView";
import InstructorView from "../components/InstructorView";
import Header from "../components/common/header";
import SearchBar from "../components/common/SearchBar";
import {Route, BrowserRouter} from 'react-router-dom';
import axios from "axios";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseList : [],
            instructorList : []
        }
    }

    // Fetch the course and instructor list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        axios.get('http://localhost:8000/manabu/api/v1/course')
            .then(jsonResp => {
                debugger;
                this.setState({ courseList: jsonResp.data.data})
            })
            .catch((err)=>{console.dir(err)})
    }

    render(){
        return (
            <div>
                <Header name="Manabu"/>
                <div style={{backgroundColor: "#28328c", color: "#ffffff", height: "300px"}}>
                    <h1 style={{marginTop: "0"}}>Learn courses online</h1>
                <h3>Course page.</h3>
                <SearchBar/>
                </div>

                <h3>Courses:</h3>
                {this.state.courseList && this.state.courseList.length >0 ?
                    <CourseView courseList={this.state.courseList}/>:null}
            </div>
        )
    }
}

export default Home;