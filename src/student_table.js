function Student_table(p){
    return(
       
        <tr>
            <td>{(p.index)+1}</td>
            <td>{p.name}</td> 
            <td>{p.rollno}</td>
        </tr>
      
    )
}
export default Student_table