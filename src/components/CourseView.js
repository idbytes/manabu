import React from 'react';

class CourseView extends React.Component{
    constructor(props) {
        super(props);

    }

    // Fetch the list on first mount of the component
    componentDidMount() {
        debugger;
    }

    render(){
        // const courses = this.state.courseList.map((course,key) =>
        //     <li key={course.id}>{course.name}</li>
        // );
        return (<div>
            Hard coded courses
            {/*<ul>*/}
            {/*    {courses}*/}
            {/*</ul>*/}
        </div>)
    }
}

export default CourseView;