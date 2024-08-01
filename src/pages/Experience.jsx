import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaVuejs } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="November 2022 - present"
                iconStyle={{ background: '#173B45', color: '#fff' }}
                icon={<FaScrewdriverWrench />}
                >
                <h3 className="vertical-timeline-element-title">Toko Sparepart Motor</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">November 2022 - Sekarang</h4> */}
                <p>
                Manajemen Administrasi
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="November 2022 - present"
                iconStyle={{ background: '#50B498', color: '#fff' }}
                icon={<FaReact />}
                >
                <h3 className="vertical-timeline-element-title">Learning Programming Languages</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">November 2022 - Sekarang</h4> */}
                <p>
                HTML, CSS, JavaScript, TailwindCSS, React, PHP, Laravel 11
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="Juli 2021 - November 2022"
                iconStyle={{ background: '#1A5319', color: '#fff' }}
                icon={<FaVuejs />}
                >
                <h3 className="vertical-timeline-element-title">Sinergi Informatika Semen Indonesia (Gresik, Jawa TImur)</h3>
                <h4 className="vertical-timeline-element-subtitle">Junior Programmer (FrontEnd)</h4>
                <p>
                Development Web App MDXL-AksesToko.
                </p>
            </VerticalTimelineElement>
            
            </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experience