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
            instructorList : [],
            searchText : ""
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
                this.setState({ courseList: jsonResp.data.data})
            })
            .catch((err)=>{console.dir(err)})
    }

    searchInputChange(event){
        this.setState({searchText: event.target.value});
    }

    searchSubmit(event){
        console.log("test....");
        //window.location.href = "http://localhost:3000/manabu/courses?search="+this.state.searchText;
        window.location = "https://www.udemy.com/";
        console.log("gffff");
    }   // Todo

    render(){
        return (
            <div>
                <Header name="Manabu"/>
                <div style={{backgroundColor: "#28328c", color: "#ffffff", height: "300px"}}>
                    <h1 style={{marginTop: "0"}}>Learn courses online</h1>
                <h3>Learn every topic. At your pace.</h3>
                <SearchBar
                    onChange={(event) => {this.searchInputChange(event)}}
                    onSubmit={(event) => {this.searchSubmit(event)}}
                />
                </div>
                {this.state.courseList && this.state.courseList.length >0 ?
                    <CourseView courseList={this.state.courseList}/>:null}
            </div>
        )
    }
}

export default Home;