import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {

  const token = sessionStorage.getItem("token");
  const userData = sessionStorage.getItem("token");

  useEffect(() => {
    setUserInfo(JSON.parse(userData));
    setUserToken(token);
  }, [])

  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState({});


  return (
    <>
      <Header />
      {/* Landing area */}
      <div style={{ height: '500px' }} className='flex justify-center items-center bg-[url(/bg-hero.webp)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex flex-col justify-center items-center'>
          <h1 className="text-5xl font-bold">Wonderful Gifts</h1>
          <p>Gift your family and friends a Book!</p>
          <div className="mt-9 flex items-center">
            <input type="text" className="bg-white py-2 px-4 rounded-full w-100 text-black placeholder-gray-500" placeholder='Search a book' />
            <FaSearch className='text-gray-500' style={{ marginLeft: '-40px' }} />
          </div>
        </div>
      </div>
      {/* New Arrival */}
      <section className='my-5 p-5 md:px-40 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold uppercase">
          New Arrivals
        </h1>
        <h2 className='text-4xl my-2'>Explore our new arrivals</h2>
        <div className='md:grid grid-cols-3 w-full my-10'>
          {/* Duplicate book cards */}
          <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%'}} />
            <div className='flex flex-col justify-center items-center m-4'>
              <h3 className='text-blue-800 font-bold text-xl'>Author Name</h3>
              <p>Title</p>
              <p>$12</p>
            </div>
          </div>
          <div className='shadow rounded-lg p-3 mx-4 my-3 md:mt-0'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%'}} />
            <div className='flex flex-col justify-center items-center m-4'>
              <h3 className='text-blue-800 font-bold text-xl'>Author Name</h3>
              <p>Title</p>
              <p>$12</p>
            </div>
          </div>
          <div className='shadow rounded-lg p-3 mx-4 my-3 md:my-2'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%'}} />
            <div className='flex flex-col justify-center items-center m-4'>
              <h3 className='text-blue-800 font-bold text-xl'>Author Name</h3>
              <p>Title</p>
              <p>$12</p>
            </div>
          </div>
          <div className='shadow rounded-lg p-3 mx-4 my-3 md:my-2'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/90822f55620761.598bf1d73ae0c.jpg" alt="Alchemist" style={{ width: '100%'}} />
            <div className='flex flex-col justify-center items-center m-4'>
              <h3 className='text-blue-800 font-bold text-xl'>Author Name</h3>
              <p>Title</p>
              <p>$12</p>
            </div>
          </div>
        </div>
        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-blue-900 p-3 text-white font-medium'>Explore More</Link>
        </div>
      </section>
      {/* Author */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
        <div>
          <div className='text-center mb-4'>
            <h2 className="text-2xl font-medium uppercase">Featured Authors</h2>
            <h3 className="text-xl font-regular">Captivates with every word</h3>
          </div>
          <p className='text-justify mb-3'>Welcome to our literary spotlight, a dedicated space celebrating the voices that shape our reading landscape. In an age of fleeting attention, these featured authors stand out, not just for the stories they tell, but for their mastery of language that truly captivates with every word.</p>
          <p className='text-justify'>
            Dive into the minds behind the narratives that challenge, comfort, and inspire. Our curated selection showcases a diverse range of talent—from established luminaries whose prose has graced bestseller lists for decades to electrifying new voices who are redefining genres. Each author featured here possesses that rare ability to transport you beyond the page, crafting worlds so vivid and characters so real that they linger long after the book is closed.
            Explore their unique journeys, discover the inspirations behind their most beloved works, and find your next unforgettable read. Whether your taste leans toward gripping thrillers, insightful memoirs, sweeping historical fiction, or groundbreaking fantasy, you will find a storyteller here who speaks directly to your soul.</p>
        </div>

        <div>
          <img src="/author.jpg" alt="Featured author" />
        </div>

      </section>
      {/* Testimony */}
      <section className='p-5 md:px-40 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold uppercase">TESTIMONIALS</h1>
        <h2 className='text-3xl my-2'>See What Others Are Saying</h2>
        <img src="/author.jpg" alt="" className='my-2 rounded-full overflow-hidden w-[200px] h-[200px]'/>
        <p className='mt-1 mb-3'>Treesa Joseph</p>
        <p className='text-justify'>Treesa Joseph an author and speaker recognized for his work on habits and improvement, including the New York Times bestseller, Atomic Habits, which has achieved significant global sales and translations. He speaks for major companies and his work has been featured in prominent publications.</p>
      </section>
      <Footer />
    </>
  )
}

export default Home