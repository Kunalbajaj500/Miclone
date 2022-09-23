import React from 'react'
import  Navbar from '../Navbar';
import "../../styles/Aps.css"
import PreNavbar from '../PreNavbar';

const AllprodShow = ({item,handleClick}) => {
    const {name,image,price}=item;

  return (
    <div>
      
      <div  className='aps'>
        <div className='aps1'>
            <img src={image} />
        </div>
        <div className='aps2'>
            <span>{name}</span>
            <span>{price}</span>
            <div className='apsb'>
            <button onClick={() => handleClick(item)}> Add to cart </button>
            </div>
           
        </div>
        </div>


    </div>
  )
}

export default AllprodShow