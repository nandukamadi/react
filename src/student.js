function Student(props){
    // let name='Ramya'
    return(
        <div>
            {/* <h1>Student name is Divya</h1>
            <h1>Student name is {name}</h1> */}
            <h1>Student name is {props.name} and rollno is {props.rollno}</h1>
        </div>
    )
}
export default Student