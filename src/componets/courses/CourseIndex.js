import CourseCard from "./CourseCard";

const CourseIndex = ({courseData}) => {

    const courseJSX = courseData.map((course)=>{
        return(
            <CourseCard courseName = {course.name} courseTown = {course.town} courseRating = {course.rating} key ={course.id} />
        )
    })

    return(
        <ul id="course-list">
            {courseJSX}
        </ul>
    )
}
export default CourseIndex;