import React from 'react'
import band from '../../Images/band2.png'
import "../../styles/Product.css"
import Footer from '../Footer'
import {Link} from "react-router-dom"
const Product = () => {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/768px-Xiaomi_logo.svg.png"
    const footer = {
      support: [
        {
          name: 'Online Help',
          url: 'https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1',
        },
        {
          name: 'Customer Service',
          url: 'https://www.mi.com/in/service/online/',
        },
        {
          name: 'Shipping FAQ',
          url: 'https://www.mi.com/in/service/shipping/',
        },
        {
          name: 'Service Centres',
          url: 'https://www.mi.com/in/service/repair/',
        },
        {
          name: 'Warrenty',
          url: 'https://www.mi.com/in/service/warranty/',
        },
        {
          name: 'Mi Exchange',
          url: 'https://www.mi.com/in/miexchange/',
        },
        {
          name: 'Bulk Order',
          url: 'https://www.mi.com/in/bulkbuy/',
        },
        {
          name: 'User Guide',
          url: 'https://www.mi.com/in/service/userguide/',
        },
        {
          name: 'Laptop Drivers',
          url: 'https://www.mi.com/in/service/support/laptop-drivers.html',
        },
        {
          name: 'Mi Screen Protect',
          url: 'https://www.mi.com/in/service/miphoneprotection/#miscreenprotect',
        },
        {
          name: 'Mi Extended Warranty',
          url: 'https://www.mi.com/in/service/miextendedwarranty/',
        },
      ],
      shopAndLearn: [
        {
          name: 'Mi 10i',
          url: 'https://www.mi.com/in/mi-10i/',
        },
        {
          name: 'Mi 10T Series',
          url: 'https://in.event.mi.com/in/mi-10t-series',
        },
        {
          name: 'Mi 11 Ultra',
          url: 'https://www.mi.com/in/mi-11-ultra/',
        },
        {
          name: 'Mi 11X',
          url: 'https://www.mi.com/in/mi-11x/',
        },
        {
          name: 'Mi 11X Pro',
          url: 'https://www.mi.com/in/mi-11x-pro/',
        },
        {
          name: 'Redmi 8',
          url: 'https://www.mi.com/in/redmi-8/',
        },
        {
          name: 'Redmi 9',
          url: 'https://www.mi.com/in/redmi-9/',
        },
        {
          name: 'Redmi 9 Prime',
          url: 'https://www.mi.com/in/redmi-9-prime/',
        },
        {
          name: 'Redmi 9i',
          url: 'https://www.mi.com/in/redmi-9i/',
        },
        {
          name: 'Redmi 9A',
          url: 'https://www.mi.com/in/redmi-9a/',
        },
        {
          name: 'Redmi Note 10',
          url: 'https://www.mi.com/in/redmi-note-10/',
        },
        {
          name: 'Redmi Note 10 Pro',
          url: 'https://www.mi.com/in/redmi-note-10-pro/',
        },
        {
          name: 'Redmi Note 10 Pro Max',
          url: 'https://www.mi.com/in/redmi-note-10-pro-max/',
        },
        {
          name: 'Redmi Note 9 Pro',
          url: 'https://www.mi.com/in/redmi-note-9-pro/',
        },
        {
          name: 'Redmi Note 9',
          url: 'https://www.mi.com/in/redmi-note-9/',
        },
        {
          name: 'Redmi Note 9 Pro Max',
          url: 'https://www.mi.com/in/redmi-note-9-pro-max/',
        },
        {
          name: 'TVs',
          url: 'https://www.mi.com/in/all-mi-tv',
        },
        {
          name: 'Laptops',
          url: 'https://www.mi.com/in/xiaomi-laptops',
        },
      ],
      retailStore: [
        {
          name: 'Mi Home',
          url: 'https://www.mi.com/in/service/mihome/',
        },
        {
          name: 'Mi Authorised Stores',
          url: 'https://www.mi.com/in/service/authorized_stores/',
        },
      ],
      aboutUS: [
        {
          name: 'Xioami',
          url: 'https://www.mi.com/in/about/',
        },
        {
          name: 'Mediakit',
          url: 'https://www.mi.com/in/mediakit/',
        },
        {
          name: 'Culture',
          url: 'https://www.mi.com/in/about/#culture',
        },
        {
          name: 'User Agreement',
          url: 'https://www.mi.com/in/about/agreement/',
        },
        {
          name: 'Privacy Policy',
          url: 'https://www.mi.com/in/about/privacy/',
        },
        {
          name: 'Declarations',
          url: 'https://www.mi.com/in/service/support/mideclare.html',
        },
        {
          name: 'Integrity & Compliance',
          url: 'https://integrity.mi.com/global',
        },
        {
          name: 'Smartphone Quality',
          url: 'https://www.mi.com/in/smartphone-quality/',
        },
        {
          name: 'TV Quality',
          url: 'https://www.mi.com/in/tv-quality/',
        },
        {
          name: 'Service Quality',
          url: 'https://www.mi.com/in/service-quality/',
        },
        {
          name: 'Environment',
          url: 'https://www.mi.com/in/service/support/ewastetakeback.html',
        },
        {
          name: 'Sitemap',
          url: 'https://www.mi.com/in/sitemap',
        },
      ],
      contactUs: [
        {
          name: 'Email',
          url: 'https://in.event.mi.com/in/questionnaire/email_us',
        },
        {
          name: 'Careers',
          url: 'https://www.mi.com/in/about/#career',
        },
      ],
    }
  return (
    <div>
        <div className='N'>
        <img src ={logo} />
        <p>Learn More about Mi Brand  </p>
        </div>
       

        <div  className='half'>
        <div className='half1'>   <img src={band}/></div>
     
        <div className='half2'>
        <h1>Mi Smart Band 6</h1>
       
        <div   className='pp2'>  <p className='pp1'>Black</p><p className='sp1'><span>Rs 3499</span> 5999 </p></div>
        <div className='list'>        <ul>
          <li>Additional Discount of ₹200 with Reward Mi Coupon</li>
          <li>Pre-Book now using F-codes and buy at discounted price on 21st</li>
        </ul></div>
        <div className='mainq'>
          <h3>Quantity</h3>
          <div className='qblock'>
            + | 1 | -
          </div>
          <div className='whitebox'>
            <div className='wb1'> <p>Mi Smart Band 6 Black * 1</p> <h5>₹3,499
₹5,999</h5></div>
            <div className='wb2'><p>Total:</p> <h2>₹3,499</h2></div>

          </div>
          <div>
        <Link to ="/allitem"  className='maib'><button>BUY NOW</button></Link>    
          </div>

        </div>
      
        
        </div>

       
        </div>
        <Footer footer={footer}/>
    </div>
  )
}

export default Product