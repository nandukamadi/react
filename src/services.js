// function Services(){
//     return(
//         <div style={{backgroundColor:"lightblue"}}>
//             <p>This is services page</p>
//         </div>
//     )
// }
import React, {Component} from "react"
class Services extends Component{
    render(){
        return(
            <div>
                <h1>This is a service page with class {this.props.name}</h1>
            </div>
        )
    }
}
export default Services