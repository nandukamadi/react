import React, { useState } from "react";
function Form1(){
    const [data, setData] = useState({
        email : "",
        password : "",
        rollno : ""
    })
    function handleInputChange(event){
        const {name,value} = event.target;
        setData((previousProps) => ({
            ...previousProps,
            [name]:value
        }))
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(data);
    }
    return(
        <>
            <h1>This is Form page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={data.email} onChange={handleInputChange} />
                <br/>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={handleInputChange} />
                <br/>
                <label>Roll no</label>
                <input type="text" name="rollno" value={data.rollno} onChange={handleInputChange} />
                <br/>
                <input type="submit" value="submit" />
            </form>
        </>
    )
}
export default Form1;