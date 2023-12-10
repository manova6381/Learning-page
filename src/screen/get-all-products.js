import axios from "axios";
import React, { useState } from "react";

import "../css/all-user.css";

const GetAllProduct = () =>{

    const [productList, updateProductList] = useState([]);

    const loadAllProduct = () =>{
        const url = "https://dummyjson.com/products";

        axios.get(url)
        .then((response) => {
            console.log(response.data.products);
            updateProductList(response.data.products);
        })
        .catch((error) =>{
            console.error(error);
            alert("pls connect internet connection");
        })
    }

    let productListMap = productList.map((value, index) =>{
        return(
            <div className="user-box" key={index}>
        {/* <div>
          <img src={value.images} width={100} />
        </div> */}
        <div style={{ marginLeft: "5px" }}>
          <label>Title :</label>
          <span>{value.title}</span>
          <br></br>
          <label>Brand :</label>
          <span>{value.brand}</span>
          <br></br>
          <label>Thumbnail :</label>
          <span>{value.thumbnail}</span>
          <br></br>
          <label>Description :</label>
          <span>{value.description}</span>
          <br></br>
          <label>Price :</label>
          <span>{value.price}</span>
        </div>
      </div>
        )
    })

    return(
        <div>
            <h3>Get All Product</h3>
            <button onClick={()=>loadAllProduct()}>product</button>
            <div>
                {productListMap}
            </div>
        </div>
    )
}

export default GetAllProduct;