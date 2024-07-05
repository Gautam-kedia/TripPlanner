import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome,FaPhoneAlt} from 'react-icons/fa'

function Footer() {
    return (
            <div className="bg-dark">
            <div className="container ">
                <div className='row py-5 text-white'>
                    <div className='col-md-3 col-sm-12'>
                        <h4 className="text-warning">TRIP PLANNER</h4>
                        <p>Trip Planner website helps you to effortlessly plan a trip and enjoy with ease at your dream vacation places </p>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                        <h4 className="text-warning">Services</h4>
                        <p>About</p>
                        <p>Tripp</p>
                        <p>Customer</p>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                    <h4 className="text-warning">USEFULL LINKS</h4>
                        <p>Sitemap</p>
                        <p>Booking</p>
                        <p>Program</p>
                    </div>

                    <div className='col-md-3 col-sm-12'>
                    <h4 className="text-warning">ADDRESS</h4>
                        <FaHome classNmae='me-1'/>Gautham...<br/>
                        <FaPhoneAlt className='me-2'/>867034686<br/>
                    </div>
            </div>
            <p className='text-white pb-5'>@copywrite code with Gautham</p>
        </div >
    </div >
  )
}
export default Footer;
