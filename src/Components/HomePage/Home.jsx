import React, { useEffect, useState } from 'react'
import './Home.css'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'
const Home = () => {
    const [opened, setopened] = useState(false)
    const [status, setStatus] = useState('')
    const [date, setDate] = useState()
    useEffect(() => {
        let year = new Date();
        setDate(year.getFullYear())
    },[])
    const show = () => {
        if (!opened) {
            setStatus('active');
            setopened(true)
        } else {
            setStatus('')
            setopened(false)
        }
    }

    const hide = () => {
            setStatus('')
            setopened(false)
    }
    return (
        <div className='home' id='home'>
            <header>
                <FiMenu className='menu' onClick={show} style={{transform: 'scale(2.5)'}} />
                <ul className={`${status}`}>
                    <li onClick={hide}><a href="#home">Home</a></li>
                    <li onClick={hide}><a href="#edex">Education & Experience</a></li>
                    <li onClick={hide}><a href="#projects">Project</a></li>
                    <li onClick={hide}><a href="#contact">Contact Me</a></li>
                </ul>
            </header>
            <div className="top">
                <div className="left">
                    <div className="text">
                        <h1><span>Nourhan</span> Shakir</h1>
                        <p>Architecture Engineer</p>
                    </div>
                    <div className="info">
                        Hello, my name is Nourhan Shakir. I am {date - 2000} years old. Studies at architecture department
                        Alexandria university
                    </div>
                    <motion.div
                        initial={{ transform: 'translateY(100%)', opacity:0 }}
                        animate={{  transform: 'translateY(0%)',opacity:1}}
                        transition={{type:'spring', duration: 3}}
                        className="quote">
                        <q>As an architect,you design for the present, with an awareness of the past for a future which is essentially unknown</q>
                        <span>Norman Foster</span>
                    </motion.div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src='https://lh3.googleusercontent.com/fife/AMPSemd1NtWbMmbLIXVu503p0HeAYdRXA9UWW0ylaNXAL7MlyevzbkqThqwBBJcSl_O6gbcH6Rjev-2EhNz-5GsfLIxmPzSZnXX7bXRPEa96QaSI7Qln-8yRd4xWLlsbHmTJw7cWUhsGqyj1LayY9KFfVSQ-Lm4qQpZGNqbS0w89-cMQUa4B1PaR95s8kKOReNp0McB-SL2KBXo8OlyR-T4hVM0C_HHm7UZnLXEfHpaF18OZ0aAfHpaxJaQ0JDAWPeHPYeoxK0ZrSCqwbEWwuU8F3P2fvKKtXIQRQylVkcDcOt4P4VX2LnChpl7-IQ1xhhuT0QMNmn8K1FUOLIyqEiCACzjT1PKIxVV53eR8SaI2GOlqFRRvFWbnkhx61gPE0xEvqx9OmcGc-sYAnlxK1_IUXwi3Hy-8UhUrtgvDorcI3aweyK-9lWP9ITJuLLkShk7yrkdEDOUEoax_elPG_IH1y_JTaN--w3QZkoVvKBx4JI9XBgSx3hWl2xAQmP6Zu_-GOWn-Bwg_vfagQocd7ONislZYZtFMFb3olmcJ2VFHQnezN9cxiWA23PGNOfuEzwsG_-u__PF93bVXh4_xxd3gfUKzkA1wHAZojMfnEueFOaNwh_km3vfjkfrGKX8CmEMHMcau3aYL8aBHIa9-2tTNix0pkGYfMeXAxb7IlNPmRDWlarIMnK9O4sBDM47ClXXCQmiLPhq7EUzZ8ngodOtM0R3VTaStlLpGqApJEc7cuczajOwj3q__9avBV7bIl_lXNB5gWRzVJS2zq0tym0dznzHOJ2Ov8O9j8TXllVIUFYdDbkEKIAR9Ko3uN6Hco5rI4XXD9u3utegFVKAy_u_qlSxjiNUAWExh5EMHyrpRsfpJIXewC7Yg5FSXVRakIORhijDwMmNcUO1riCkU-h4HY2VuIgBeZJdL8KtEP54foQxtUEqQJ_nWXrJ3gU2p2-WU2AJTIWyWgwSkgYaxThX9GvMcvgUliyWqIbDR4gMZ7xQ5JwHY8DTxw-11Q7QNIASFot11hs1TYkvUWoIYxUE3BwR1075_FLxKm7Y4e-_rpbfBjnBE9aLWU-qwXJOYBJv7EpMb9qtZG7MQshXsB_tsGmMfxABN6Jgu5nwcOwvNZQV__HRe3xNS5A2wjpjTYeO7QtMyBeFVPqLIDgUum2NUU6dnFBHkVVzgdBK-kghBQLMOgV5cSwWeUhAYqEF0XUMJDoZT3dMB_70RiUwWEohn07ApmDdmMp_0QkWl4W3mC73_dXMZBGHrVSkgXve--HVecSDr9b3C1IRYf4NeEgCzxoiusIgBz0jkD0kZYJHDYbHPy206Wn7CRIOpr3ULMd98x7G2M0ICjN8zLOUrfx5SxqyorLTGCJ6B9yefUzaBrngqdr7Q9AA_UP5Nyx38bNx1Xj_wOJBjmvWjeKNr7Tb8zJHtJgxCZlLyO3w93KZDiEBopN2HA9Y8zGFYXB5xbNIdrE9pt_IU_8OwZW1oERUv7HGT5r3KLVryAHqByJCNXMPaY-2G-Gi1FsY=w1920-h942' alt="Nourhan Shakir" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home