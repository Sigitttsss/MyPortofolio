import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { portfolioList } from '../data/DataPortfolio'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/DetailPortfolio.css'
//import PageNotFound from './PageNotFound.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'


function DetailPortfolio() {
    const{id} = useParams();
    const data = portfolioList.find((item) => item.id === id)
    if(data == undefined){
      return <Navigate to='/page-not-found' />
    }
  return (
    <>
    <Navbar />
    <section id='detail-portfolio'>
        <div className='wrapper'>
          <h1>{data.title}</h1>
            <img src={data.image} />
            <p className='skill'><b>Skill : </b>{data.skill}</p>
            <p className='skill'><b>Link : </b>{data.link}</p>
        </div>
    </section>
    <Footer />
    <ScrollToTop />
    </>
    
  )
}

export default DetailPortfolio