import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

    Coffee_ShopDesc: "A coffee shop management project involves tracking inventory, managing orders, scheduling staff, and handling customer feedback. It aims to improve operational efficiency, customer satisfaction, and profitability in a coffee shop business.",

    Weather_AppDesc:"A weather app offers real-time weather forecasts, including temperature, humidity, wind speed, and other conditions. It helps users track and plan activities based on weather information for various locations worldwide.",
    
    PortfolioDesc:"A portfolio showcases an individual's work, skills, and accomplishments, typically in creative fields. It includes projects, designs, achievements, and professional experiences, highlighting expertise to potential clients, employers, or collaborators.",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

        </div>
    </div>
  )
}

export default  ProjectBox