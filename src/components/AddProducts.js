import React, { useState } from 'react'
import { storage, fireDB } from '../firebase'
import { ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";


export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [productCategory, setProductCategory] = useState('');
    const [error, setError] = useState('');

    const types = ['image/png']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const strRef = ref(storage, `product-images/${productImg.name}`);
        const uploadTask = uploadBytesResumable(strRef, productImg);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log("upload unsuccessful")
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const docRef = addDoc(collection(fireDB, "Products"), {
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImg: downloadURL,
                        ProductCategory: productCategory
                    });
                    console.log("Document written with ID: ", docRef.id);
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    return (
        <div className='container' style={{fontFamily: "Nunito Sans, sans-serif;"}}>
            <br />
            <h2 className='text-center'>ADD PRODUCTS</h2><br/>
            
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                {error && <span className='error-msg' style={{color:"red"}}>{error}</span>}
                <br /><br/>
                <label htmlFor="product-name">Product Category</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductCategory(e.target.value)} value={productCategory} />
                <br /><br />

                <button type="submit" className='btn btn-md' style={{backgroundColor:"#F9B244", width:"100%", color:"white"}}>ADD</button>
            </form><br />

        </div>
    )
}
export default AddProducts