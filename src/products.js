import { useMemo, useEffect, useState } from "react";
import axios from "axios"; // npm i axios
import "./products.css";

function Products() {
  const [data, setData] = useState([]); // const data=[]
  // const [cnt,setCnt] = useState(0) // const cnt=0
  const api = "https://fakestoreapi.com/products";
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    getProductlist();
  }, []);
  const api1 = "https://fakestoreapi.com/products/categories";
  // useEffect(() => {
  //     setData(data);
  // }, []);
  //way1 .without [] means multiple times
  //way2. [] means one time
  //way3. [cnt] means inside the function call based on "cnt" value
  const getProductlist = () => {
    axios.get(api).then((response) => {
      // console.log(response)
      setData(response.data);
    });
  };

  return (
    <>
      {/* <p>{cnt}</p> */}
      {/* <button onClick={()=>setCnt(cnt+1)}>count</button> */}
      <div>Filter by Category:</div>
      <div>
        <select
        // name="category-list"
        // id="category-list"
        // onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>

      <div className="products-list">
        {data.map((ele, i) => {
          return (
            <div className="card">
              <img src={ele.image} />
              <p>{ele.title}</p>
              <p>{ele.price}</p>
              <p>{ele.category}</p>
            </div>
          );
        })}
      </div>

      {/* <div className="sport-list">
        {filteredList.map((element, index) => (
          <data {...element} key={index} />
        ))}
      </div> */}
    </>
  );
}
export default Products;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import './products.css';
// // import Productinfo from "./productinfo";
// import { Link } from "react-router-dom";
// function Products()
// {

//     const [data,setData] = useState([]) // const data=[]
//     // const [cnt,setCnt] = useState(0) // const cnt=0
//     const api = 'https://fakestoreapi.com/products';
//     const [category, setCategory] = useState(([]));
//     const [selectcat, setSelectcat] = useState();
//     useEffect(()=>{
//         getProductlist();
//         getCategory();
//     },[selectcat])
//     //way1 .without [] means multiple times
//     //way2. [] means one time
//     //way3. [cnt] means inside the function call based on "cnt" value
//     const getProductlist = () =>{
//         axios.get(api).then((response) => {
//             // console.log(response)
//             setData(response.data);
//         });
//     }
//     const getCategory=()=>{

//     }
//     return(
//         <div>
//             <h1>Fake Product List</h1>
//           <select >
//             <option>categories</option>
//             <option>men's ware</option>
//             <option>jewellery</option>
//             <option>electronics</option>
//             <option>womens ware</option>
//           </select>
//             {/* <p>{cnt}</p>
//             <button onClick={()=>setCnt(cnt+1)}>count</button> */}
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card">
//                             <Link to={`../productinfo/${ele.id}`}>
//                             <img src={ele.image} alt=" "/></Link>
//                             <p>{ele.title}</p>
//                             <p>{ele.price}</p>
//                             <p>{ele.category}</p>
//                         </div>
//                     )
//                 })
//             }
//             </div>

//         </div>
//     )

// }
// export default Products;
