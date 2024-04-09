import React from 'react'
import './SkillsStyle.css'

const Skills = (props) => {
  return (
    <div id='Skills' className='SkillsandEducation'>
      <h1 className='SkillsTitle'>{props.SkillsTitle}</h1>
     <div className='Container'>
      <div className='education'>
        <h2>{props.education}</h2>
        <div className='child'>
        <div className='details'>
        <div className='container'>
          <h3 className="title">
            <span class="title-word title-word-1">{props.collagelearn1}</span>
            <span class="title-word title-word-2">{props.collagelearn2}</span>
            <span class="title-word title-word-3">{props.collagelearn3}</span>
            <span class="title-word title-word-4">{props.collagelearn4}</span>
          </h3>
        </div>
            <p className='date'>{props.datecollage}</p>
            <p className='def'>{props.collage}</p>
        </div>
        <div className='details'>
        <div className='container'>
          <h3 className="title">
            <span class="title-word title-word-1">{props.courselearnone1}</span>
            <span class="title-word title-word-2">{props.courselearnone2}</span>
            <span class="title-word title-word-3">{props.courselearnone3}</span>
            <span class="title-word title-word-4">{props.courselearnone4}</span>
          </h3>
        </div>
            <p className='date'>{props.datecourseOne}</p>
            <p className='def'>{props.courseOne}</p>
        </div>
        <div className='details'>
        <div className='container'>
          <h3 className="title">
            <span class="title-word title-word-1">{props.courselearntwo1}</span>
            <span class="title-word title-word-2">{props.courselearntwo2}</span>
            <span class="title-word title-word-3">{props.courselearntwo3}</span>
            <span class="title-word title-word-4">{props.courselearntwo4}</span>
          </h3>
        </div>
            <p className='date'>{props.datecourseTwo}</p>
            <p className='def'>{props.courseTwo}</p>
        </div>
        <div className='details'>
        <div className='container'>
          <h3 className="title">
            <span class="title-word title-word-1">{props.courselearnthree1}</span>
            <span class="title-word title-word-2">{props.courselearnthree2}</span>
            <span class="title-word title-word-3">{props.courselearnthree3}</span>
            <span class="title-word title-word-4">{props.courselearnthree4}</span>
          </h3>
        </div>
            <p className='date'>{props.datecourseThree}</p>
            <p className='def'>{props.courseThree}</p>
        </div>
        </div>
      </div>
      <div className='Skills' >
        <h2>{props.SkillsTitlechild}</h2>
        <div className='codeFamily'>
        <img className='code' src={props.code}alt="" />
        <div className='framework'>
            <img src={props.html} alt="" />
            <img src={props.css} alt="" />
            <img src={props.js} alt="" />
            <img src={props.picreact} alt="" />
            <img src={props.bootstrap} alt="" />
            <img src={props.tailwind} alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Skills
