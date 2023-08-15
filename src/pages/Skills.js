import React from 'react';
import '../styles/Home.css';


function Skills() {
  return (
    <div className='skills'>
    <h1>Skills</h1>
    <ol className='list'>
      <li className='item'>
        <h2>Programming And Web Technologies</h2>
        <span>
        Java, C, C++(Basics), JavaScript, Angular, React, Node.js, HTML5, CSS, Spring MVC framework, Hibernate, Docker, AWS, Bootstrap, JSP
        </span>
      </li>
      <li className='item'>
        <h2>Databases And OS</h2>
        <span>
        MySQL, MongoDB, PostgreSQL, MSSQL, Kali Linux, Windows, Ubuntu 
        </span>
        </li>
        <li className='item'>
        <h2>Application Tools </h2>
        <span>
        Git, Apache Tomcat, NetBeans, IntelliJ, Eclipse, Visual Studio Code, MS Excel, MS Word, Figma, MySQL Workbench, GitHub, Lucidchart, Moqup Tools, dBeaver
        </span>
        </li>
    </ol>
    
     </div>


  )
}

export default Skills