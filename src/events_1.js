function Events1(){
    function getdata(e, arg2){
        console.log(e.target.value+" "+arg2)
        // console.log(e.target.name+" value is: "+e.target.value+" "+arg2)
    }
    return(
        <div>
            <h1>Input Events</h1>
            {/* <input type="text" onChange={getdata}/> */}
            <input
            type="text"
            // name="firstname"
            onChange={(e)=>getdata(e,"Divya")}/>
        </div>
    )
}
export default Events1