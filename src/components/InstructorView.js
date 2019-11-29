import React from 'react';
import axios from "axios";

class InstructorView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            instructorList: []
        };

    }

    // Fetch the list on first mount of the component
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        axios.get('http://localhost:8000/manabu/api/v1/instructor')
            .then(jsonResp => {
                console.dir("InstructorView: "+jsonResp);
                this.setState({ instructorList: jsonResp.data.data})
            })
            .catch((err)=>{console.dir(err)})
    }
    render(){
        const courses = this.state.instructorList.map((course,key) =>
            <li key={course.id}>{course.name}</li>
        );
        return (<div>
            <ul>
                {courses}
            </ul>
        </div>)
    }
}

export default InstructorView;
