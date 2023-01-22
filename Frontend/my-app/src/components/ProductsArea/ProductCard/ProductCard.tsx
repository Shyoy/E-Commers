import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import ProductModel from '../../../Models/Products'
import { addItem, decrement, increment, selectInCart, selectLastUpdate } from '../../../Redux/cartSlice'
import config from '../../../Utils/Config'
import './ProductCard.css'

interface ProductProps {
  product: ProductModel,
}



const ProductCard = (props:ProductProps):JSX.Element => {
  const inCart = useAppSelector(selectInCart);
  const lastUpdate = useAppSelector(selectLastUpdate);
  const dispatch = useAppDispatch();
  const currentItemList = inCart.filter((item) => props.product.id === item.id)
  const currentItem = currentItemList[0] || null
  if (currentItemList){
     
  }
  const [amount, setAmount] = useState<number>(currentItem?.amount)

  // useEffect(() => {
  //   console.log(inCart.length);
  // },[inCart]);
  
  // console.log(inCart)
  return (
      <div className="ProductsCard card"> 
              <img className="card-img-top" src={config.productImagesUrl+props.product.image} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">Price - {props.product.price}</p>
                <p className="card-text">Amount - {props.product.amount}</p>
                {currentItemList.length === 1 ? 
                <div>
                <button onClick={()=> dispatch(decrement({id:props.product.id}))} className='bg-primary bg-gradient text-danger px-3 rounded-pill'>-</button>
                <span className='amount bg-primary bg-gradient '>{currentItem.amount}</span>
                <button onClick={()=> dispatch(increment({id:props.product.id}))} className='bg-primary bg-gradient text-info px-3 rounded-pill'>+</button>
                </div>
                :
                <div>
                <button onClick={()=> dispatch(addItem(props.product))} className='bg-primary bg-gradient rounded-pill px-4'>ADD</button>
                </div>
                }
                
                
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
      </div>
  )
}

export default ProductCard