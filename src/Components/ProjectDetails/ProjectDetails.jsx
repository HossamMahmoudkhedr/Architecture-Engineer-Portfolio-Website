import React, { useState, useEffect } from 'react'
import './ProjectDetails.css'
import { ProjectsData } from '../../ProjectsData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom' 

const ProjectDetails = () => {
  const { name } = useParams();
  const chosenProj = ProjectsData.find((project) => project.name === name)
 const [date, setDate] = useState();
  useEffect(() => {
      window.sessionStorage.setItem('opened', true);
  },[])  
  useEffect(() => {
        let year = new Date();
        setDate(year.getFullYear())
    },[date])
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <div className="projectData">
      <div className="top space">
        <div className="left">
          <h2>{chosenProj.name}</h2>
        </div>
        <div className="right">
          <img src={chosenProj.shot1} alt={chosenProj.name} />
        </div>
      </div>
      <div className="pad">
      <div className="explain space">
        <div className="left">
          <div className="frame">
            <div className="shadow">
            <img src={chosenProj.shot2} alt={chosenProj.name} />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <p>{chosenProj.explain}</p>
          </div>
        </div>
      </div>
        <div className="concept space">
          <h2>Concept</h2>
        <p>{chosenProj.concept}</p>
      </div>
      <div className="moreImages space">
        <div className="left">
          <div className="frame">
            <div className="shadow">
              <img src={chosenProj.shot3} alt={chosenProj.name} />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="frame">
            <div className="shadow">
              <img src={chosenProj.shot4} alt={chosenProj.name} />
            </div>
          </div>
        </div>
        </div>
        <div className="how space">
          <h2>How Is This Done?</h2>
          <div className="diagram">
            <div className="left">
              <img src={chosenProj.layer1} alt="" />
            </div>
            <div className="right">
              <img src={chosenProj.layer2} alt="" />
            </div>
          </div>
          <div className="plans">
            <h3>{chosenProj.FPlanName}</h3>
            <div className="topImage">
              <img src={chosenProj.plan1} alt="" />
            </div>
            <h3>{chosenProj.SPlanName}</h3>
            <div className="bottomImage">
              <img src={chosenProj.plan2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="content">
          <Link to='/'><h4>Home</h4></Link>
          <div className="icons">
                  <a href="https://www.facebook.com/nourhan.shakir7" target='_blank' rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/%D9%86%D9%88%D8%B1-%D8%B4%D8%A7%D9%83%D8%B1-8880b021b/" target='_blank' rel="noreferrer">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/+201007912227?text=Hi Nourhan! How are you?" target='_blank' rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </a>
          </div>
          <a href="mailto:nour.shakir7@gmail.com" className='btn'>Get in touch</a>
        </div>
        <p className='copy'>&#169; copyrights {date}. Made by <a href="https://github.com/HossamMahmoudkhedr" target='_blank' rel='noreferrer'>Hossam Mahmoud</a></p>
      </footer>
    </div>
  )
}

export default ProjectDetails