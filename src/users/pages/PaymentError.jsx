import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
    <Header />
        <div className='container my-10 min-h-screen flex justify-center items-center'>
            <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
                <div>
                    <h1>Sorry Payment Failed</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, architecto maiores! Officiis dolor eveniet voluptas, minima temporibus rerum velit deserunt nam molestias similique exercitationem sunt, sint quo atque aspernatur dicta?</p>
                    <Link to={'/books'} >Explore more books</Link>
                </div>
            </div>
            <div>
                <img src="/book-loader-inner.gif" alt="" />
            </div>
        </div>
    <Footer />
    </>
  )
}

export default PaymentError