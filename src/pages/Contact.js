import React from 'react'
import { Email, LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  const email = 'pinnamraju.r@northeastern.edu';
  return (
    <div className='contact'>
    <h2> <center>Contact Me!!!</center></h2>
     <List>
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
        </List>
        <List>
          <ListItem>
        <ListItemIcon>
        <Email/>: <a href={`mailto:${email}`}>{email}</a>
        </ListItemIcon>
        </ListItem>
        </List>
     


    </div>
  )
}

export default Contact