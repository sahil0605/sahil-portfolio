import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div id='experience' className='experience-container'>
      {/* Box 1 - Diagonal Top Left */}
      <div className='box diagonal-top-left'>
        <h2 className='company-name'>Walrus Solutions Pvt Ltd</h2>
        <h3 className='role'>Role: Web Developer Intern</h3>
        <ul className='role-details'>
        <li> Contributed to UI development as a front-end developer intern at Walrus Solutions Pvt Ltd using React technology</li>
          <li>Utilized React Router for seamless navigation between sections of the training page</li>
          <li>Demonstrated proficiency in React technology and contributed to the website's UI development.
</li>
        </ul>
      </div>

      {/* Box 2 - Diagonal Bottom Right */}
      <div className='box diagonal-bottom-right'>
        <h2 className='company-name'>Attended Amazon ML Summer School'23</h2>
        <h3 className='role'>Role: Student Apprentice</h3>
        <ul  className='role-details'>
          <li>Participated in classes spanning till October to gain a deeper understanding of machine learning concepts .
</li>
          <li>Developed essential soft skills such as project management, communication, problem-solving, and leadership skills.</li>
          <li>Studied probability, statistics, linear algebra, and basic machine learning concepts .
.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
