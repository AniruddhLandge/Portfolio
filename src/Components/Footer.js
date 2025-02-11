import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aniruddha Landge</h4>
      <h4>Copyright &copy; 2025 AL</h4>
      <div className='footerLinks'>
        <a href="https://github.com/AniruddhLandge" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aniruddha-landge-1225a22a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:landgeaniruddha@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer