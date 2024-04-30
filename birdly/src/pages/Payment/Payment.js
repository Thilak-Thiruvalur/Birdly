import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Payment.css'

const Payment = () => {
    const [data,setData]=useState({
        name:'',
        card:'',
        cvv:'',
        cdate:'',
    })

    const navigate =useNavigate()

    const submitHandler =(e)=>{
        alert('Payment Successful!And your order is Placed!')
        navigate('/myorders')
    }
    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data =>({...data,[name]:value}))
  
      }
  return (
    <>
        <form onSubmit={submitHandler} className='payment-body'>
        <div className='payment-left'>
            <p className='payment-left-title'>Payment Details</p>  
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Name as in Card' required></input> 
            <input name='card' onChange={onChangeHandler} value={data.card} type="number" placeholder='Card Number' required></input> 
            <div className='multi-fields'>
                <input name='cvv' onChange={onChangeHandler}  value={data.cvv} type="number" placeholder='cvv'required></input>
                <input type="month" onChange={onChangeHandler}  value={data.cdate} id="cdate" name="cdate" min="2023-06" />
            </div>
            <button type='submit'>PAY</button>
        </div>
        </form>
    </>
  )
}

export default Payment
