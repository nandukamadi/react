import { useEffect, useState } from "react";
import axios from "axios";
import './products.css';
import Productinfo from "./productinfo";
import { Link } from "react-router-dom";
function Fakeapi()
{
    
    const [data,setData] = useState([]) // const data=[]
    const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }

    return(
        <div>
            <h1>Fake Product List</h1>
          <select >
            <option>categories</option>
            <option>men's ware</option>
            <option>jewellery</option>
            <option>electronics</option>
            <option>womens ware</option>
          </select>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                            <Link to={`../productinfo/${ele.id}`}>
                            <img src={ele.image} alt=" "/></Link>
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div>                        
                    )
                })
            }
            </div>


        </div>
    )

}
export default Fakeapi;