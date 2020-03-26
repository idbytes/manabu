import React from 'react';
import CourseCardTemplate from "./CourseCardTemplate";
import PropTypes from "prop-types";

class CourseView extends React.Component{
    static propTypes = {
        courseList: PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
    }

    // Fetch the list on first mount of the component
    componentDidMount() {
        console.log("Component mounted");
    }

    render(){
        return (<div>
            <h3>Courses:</h3>
            {this.props.courseList.map((course,ci) => {
                return (
                    <CourseCardTemplate key={ci} course={course} />
                )
            },)}
        </div>)
    }
}

export default CourseView;