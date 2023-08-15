import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UndergraduationSchoolIcon from '@material-ui/icons/School'
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.css';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='certical-timeline-lement--education'
        date='2016-2020'
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<UndergraduationSchoolIcon />}>
          <h3 className='vertical-timeline-element-title'> 
          Jawaharlal Nehru Technological University, AP, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Computer Science</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Northeastern University, Boston, MA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Software Engineering Systems</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022-Aug 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Cloudtaru Infotech Pvt Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, Telangana, India
          </h4>
          <p>Developed a Common Portal Frontend and Backend by using Angular and node.js</p>
          <p>Created a new database for the Common Portal in PostgreSQL</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience