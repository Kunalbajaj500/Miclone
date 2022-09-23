import React from 'react'
import data from "../../data/data.json"
import AllprodShow from './AllprodShow'
import "../../styles/Allprod.css"
import PreNavbar from '../PreNavbar'
import Navbar  from '../Navbar'

const AllProd = ({handleClick}) => {
  return (
    <div>
       <Navbar/>
    <section>
     
     

        {data.Products.map((item)=>(
            <AllprodShow key={item.id} item={item} handleClick={handleClick}/>
        )

        )}

    </section>
    </div>
  )
}

export default AllProd