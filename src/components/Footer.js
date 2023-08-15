import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='SocialMedia'>
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
      <p> &copy; </p>
    </div>
  )
}

export default Footer