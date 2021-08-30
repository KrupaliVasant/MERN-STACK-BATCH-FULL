import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductGet = () => {
    let [product, setProduct] = useState();

    const loadData = () => {
        axios.get(`http://127.0.0.1:8081/productget`).then((res) => {
            setProduct(res.data);
            console.log("Get data :" + res);
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-contain">
                <form onSubmit={loadData}>
                    Product Id: <input type="text" name="product_id" /><br />
                    Product Name: <input type="text" name="product_name" /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {/* <p className="text-white">{product}</p> */}

            {/* <ul>
                {
                    product && product.map((pro => (
                        <li key={pro.product}></li>
                    )))
                }
            </ul> */}
        </>
    )
}

export default ProductGet;