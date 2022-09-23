import React from 'react'
import Prenav from "../PreNavbar"
import Navbar from "../Navbar"
import "../../styles/Phone1.css"
import Element from './Element'
import Imbox from "./Imbox"
import b120 from "../../Images/120b.jpg"
import Footer from "../Footer.js"
import {Link } from "react-router-dom"

const Phone1 = ({ima,}) => {
   // const navigate =useNavigate()
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
        <Prenav/>
        <Navbar/>
        <div className='grey'>
         <h4> Redime Pro 5G</h4>
          <span className='g2'>
          <span >
           Overview </span>
          <span>Specs</span> 
         <span>Review</span>  
        <span> FAQ</span>  
        </span>
       <Link to ="/product" ><button className='but' >BUY NOW</button></Link> 
        </div>
        <div className='ig'><img src={ima} /></div>
        <div className='Element'><Element/>
       <Imbox/>
       <div className='b120'> <h2>120W Xiaomi Hyper Charge</h2> <p> Indial fastest charging technology **</p><img src ={b120} />
       <p className='p1'>A hands-on video of a supposed 120 W charger made by Xiaomi has been posted on Chinese social media. The authenticity of the clip has been called into question; however, there is a 
        strong rumor that an upcoming Xiaomi Mi Mix smartphone could utilize 100 W charging and maybe even 120 W if this video
         is genuine.
        </p></div>
      
      
        </div>
        <Footer footer={footer}/>
        
       
       

    </div>
  )
}

export default Phone1