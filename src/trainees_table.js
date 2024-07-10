import Student_table from "./student_table"
function Trainee_table(){
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
            <h1>Trainees Table</h1>
            <table border={1} cellSpacing={0} align="center" width={'500px'}>
                <tr><th>S.No</th><th>Name</th><th>Rollno</th></tr>
            {
                students.map((ele,i,arr)=>
                {
                    return (<Student_table index={i} name={ele.name} rollno={ele.rollno} />)
                })
            }
            </table>
        </div>
    )
}
export default Trainee_table