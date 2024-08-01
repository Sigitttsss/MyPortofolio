import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            <h3>Ooopss...</h3>
            <p>Page Not Found ....</p>
        </div>
        <Footer />
    </>
  )
}

export default PageNotFound