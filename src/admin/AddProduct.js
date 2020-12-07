import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth' 
import { Link } from 'react-router-dom'
import { createProduct } from './apiAdmin'
import AddCategory from './AddCategory';


const AddProduct = () => {
    const { user, token } = isAuthenticated()
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createProduct,
        redirectToProfile,
        formData
    } = values

    useEffect(() => {
        setValues({...values, formData: new FormData()})
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name] : value})
    }

    const clickSubmit = (event) => {

    }

    const newPostForm = () => (
        <form className='mb-3' onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className='form-group'>
                <label className='btn btn-secondary'>
                    <input onChange={handleChange('photo')} type='file' name='photo' accept="image/*" />
                </label>
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input onChange={handleChange('name')} type='text' className='form-control' value={name} />
            </div>
            <div className='form-group'>
                <label>Description</label>
                <textarea onChange={handleChange('description')} className='form-control' value={description} />
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input onChange={handleChange('price')} type='number' className='form-control' value={price} />
            </div>
            <div className='form-group'>
                <label>Category</label>
                <select onChange={handleChange('category')} className='form-control'>
                    <option value='5f8e4926f333953924405fad'>Soy Wax Candles</option>
                </select>
            </div>
            <div className='form-group'>
                <label>Shipping</label>
                <select onChange={handleChange('shipping')} className='form-control'>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                </select>
            </div>
            <div className='form-group'>
                <label>Quantity</label>
                <input onChange={handleChange('quantity')} type='number' className='form-control' value={quantity} />
            </div>
            <button className='btn btn-outline-primary'>Create Product</button>
        </form>
    )



    return (
        <Layout title="Add a new product" description={`Welcome ${user.name}.  You are adding a new product`}>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    {newPostForm()}
                </div>
            </div>
        </Layout>   
    )

}

export default AddProduct