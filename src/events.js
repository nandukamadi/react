function Events(){
    let arr = [10,20,39];
    let trainee=[{
        name: "divya",
        rollno: 531
    },{
        name: "ramya",
        rollno: 505
    }];
    //function getdata(name){
         // alert("Name is: "+name)  }
    function getdata(res){
        res.map((ele,i)=>{
            document.write(i+1 + "." +ele.name + " " +ele.rollno + "<br/>");
        })
    }
    return(
        <div>
            <h1>Events</h1>
            {/* <button onClick={getdata('divya')}>Click here</button> */}
            {/* <button onClick={()=>getdata(arr)}>Click Here</button> */}
            <button onClick={()=>getdata(trainee)}>Click Here</button>
        </div>
    )
}
export default Events;