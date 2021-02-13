import { useEffect, useState } from "react";
import CourseIndex from "../componets/courses/CourseIndex";


const CourseLanding = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect(() =>{
        getCourses()
    }, [])

    const getCourses = () => {
        fetch("http://localhost:8080/courses")
        .then((res) => res.json())
        .then((returnedData) => setCourseData(returnedData))
    }


    return(
        <>
            <h1>Courses</h1>
            <CourseIndex courseData={courseData}/>
        </>
    );
}

export default CourseLanding;