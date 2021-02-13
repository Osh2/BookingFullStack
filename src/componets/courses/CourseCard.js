const CourseCard = ({courseName, courseTown, courseRating}) => {


    return(
        <div className = "course-card">
            <h1>{courseName}</h1>
            <h3>{courseTown}</h3>
            <h3>{courseRating}</h3>
        </div >
    )
}

export default CourseCard;