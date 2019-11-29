import React from 'react';
import CourseView from "./CourseView";
import InstructorView from "./InstructorView";

class Home extends React.Component{
    render(){
        return (
            <div>
                <h2>Home Page</h2>
                <CourseView/>
                <InstructorView/>
            </div>
        )
    }
}

export default Home;