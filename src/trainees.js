import Student from "./student"
function Trainee(){
    let students=[{
        name:"Divya",
        rollno:531
    },{
        name:"Ramya",
        rollno:505
    },{
        name:"Satya",
        rollno:532
    },{
        name:"Sravya",
        rollno:524
    }]
    return(
        <div>
            <h1>Trainees list</h1>
            {
                students.map((ele,i,arr)=>
                {
                    return (<Student name={ele.name} rollno={ele.rollno} />)
                })
            }
           
        </div>
    )
}
export default Trainee