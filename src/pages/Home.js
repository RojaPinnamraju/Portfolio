import React from 'react';
import profilePic from '../assets/rojapic.jpg'; 


// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import { LinkedIn } from '@material-ui/icons';
// import { GitHub } from '@material-ui/icons';
// import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  
  return (
    <div className='home'>
      <div className='about'>
        {/* <div className='profile'>
          <div className='profile-picture-background'></div>
        </div> */}
        <div className='container'>
        <img  className="profile-picture" src={profilePic} alt="Profile"/>
        </div>
        <h2>Hi ! Welcome To My Portfolio</h2>
        <div className='promt'> <p> My name is Roja Pinnamraju. I am a passionate software engineering student pursuing masters at Northeastern University and a collaberative team player with excellent technical abilities </p>
         {/* <List>
           <ListItem button component={Link} to="https://www.linkedin.com/in/rojapinnamraju/">
           <ListItemIcon>
           <LinkedIn />
           </ListItemIcon>
           <ListItemText primary="LinkedIn" secondary="https://www.linkedin.com/in/rojapinnamraju/" />
           </ListItem>
         </List>
        <List>
           <ListItem button component={Link} to="https://github.com/RojaPinnamraju">
           <ListItemIcon>
           <GitHub />
           </ListItemIcon>
           <ListItemText primary="GitHub" secondary="https://github.com/RojaPinnamraju" />
           </ListItem>
        </List> */}

        </div>
      </div>
    </div>
  )
}

export default Home