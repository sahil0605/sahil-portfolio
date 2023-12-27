import React from 'react';
import './Skill.css';
import c from './c-.png'
import react from './react.png'
import html from './html-5.png'
import css from './css-3.png'
import node from './node.png'
import express from './express-logo.png'
import mongo from './mongo.png'
import js from './js.png'
import boot from './bootstrap.png'
import git from './git.png'
import mysql from './mysql.png'
import sql from './sql-server.png'
import sahil from './mypic.jpeg'

function Skill() {
  return (
    <div id='skills'>
      
      <div className='main'>
      <div>
      <h1 className='heading'>My Skills</h1>
      <ul className='item-list'>
        <li className='list-item' >
          <img src={c} alt='C++'></img>
          <p>C++</p>
        </li>
        <li className='list-item'>
          <img src={react}></img>
          <p>React</p>
        </li>
        <li className='list-item'>
          <img src={js}></img>
          <p>JavaScript</p>
        </li>
        <li className='list-item'>
        <img src={html}></img>
        <p>HTML</p>
        </li>
        <li className='list-item'>
        <img src={css}></img>
        <p>CSS</p>
        </li>
        <li className='list-item'>
        <img src={node}></img>
        <p>Node JS</p>
        </li>
        <li className='list-item'>
        <img src={express}></img>
        <p>Express JS</p>
        </li>
        <li className='list-item'>
        <img src={mongo}></img>
        <p>MongoDB</p>
        </li>
        <li className='list-item'>
        <img src={boot}></img>
        <p>Bootstrap</p>
        </li>
        <li className='list-item'>
        <img src={sql}></img>
        <p>SQL</p>
        </li>
        <li className='list-item'>
        <img src={git}></img>
        <p>Git</p>
        </li>
        <li className='list-item'>
        <img src={mysql}></img>
        <p>MySql</p>
        </li>
      </ul>
      </div>
      <div className='pic'>
      <img src={sahil}></img>
      </div>
      </div>
    </div>
  );
}

export default Skill;
