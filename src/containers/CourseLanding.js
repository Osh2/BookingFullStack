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
            <form>
                <label >Course Name:</label>
                <input type="text" name="name" />
                <label >Course Town:</label>
                <input type="text" name="town" />
                <label >Course Rating:</label>
                <select name="rating">
                    <option >---Please Select---</option>
                    <option name="ONE">ONE</option>
                    <option name="TWO">TWO</option>
                    <option name="THREE">THREE</option>
                    <option name="FOUR">FOUR</option>
                    <option name="FIVE">FIVE</option>
                </select>

            </form>
            <CourseIndex courseData={courseData}/>
        </>
    );
}

export default CourseLanding;