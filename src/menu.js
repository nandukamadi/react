import { Link } from "react-router-dom"
function Menu(){
    return(
        <div>
            <Link to="/"> Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about"> About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/services"> Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/student">Student</Link>
            {/* <Link to="/trainees"> Trainee </Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
            <Link to="/trainees_table"> Trainee Table</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to="/Image"> Image</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact"> Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/events"> Events</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/events_1"> Events1</Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* <Link to="/color"> Color</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/number"> Number</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/image_slider"> ImageSlider</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/hooks"> Hooks</Link>
            <Link to="/form"> Form</Link> */}
             <Link to="/products"> Product</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/productinfo"> Productinfo</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )

}
export default Menu