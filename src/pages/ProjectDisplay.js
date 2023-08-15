import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHub from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
        <b>Skills:</b> {project.skills}
      </p>

       <List>
           <ListItem button component={Link} to={project.Link}>
           <ListItemIcon>
           <GitHub/>
           </ListItemIcon>
           </ListItem>
      </List>
     
 
  </div>
  );
}

export default ProjectDisplay