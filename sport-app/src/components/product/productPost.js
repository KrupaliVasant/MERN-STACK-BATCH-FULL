import axios from 'axios';
import { useState } from 'react';

const ProductPost = () => {
    const [product_id, setProduct_id] = useState('');
    const [product_name, setProduct_name] = useState('');

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const handleChange = (e) => {
        e.preventDefault();
        const id = document.getElementById('product_id').value;
        const name = document.getElementById('product_name').value;
        setProduct_id(id);
        setProduct_name(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            product_id,
            product_name
        };
        axios.post(`http://127.0.0.1:8081/productpost`, product, { headers: headers })
            .then((res) => {
                console.log(res);
                alert(`Add product : 
            ID:${product.product_id}, Product Name:${product.product_name}`);
            })
    }

    return (
        <>
            <div className="container-fluid mt-contain">
                <form onSubmit={handleSubmit}>
                    Product Id: <input type="text" id="product_id" name="product_id" onChange={handleChange} /><br />
                    Product Name: <input type="text" id="product_name" name="product_name" onChange={handleChange} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ProductPost;