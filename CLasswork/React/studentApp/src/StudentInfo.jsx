function StudentInfo(props){
    // const name = "Akshay";
    // const age = 22;
    // const course = "Web technology React";

    return(
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </>
    )
}

export default StudentInfo;