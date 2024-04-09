import React from 'react'
import './WorksStyle.css'

const Works = (props) => {
  return (
    <div id='Works' className='Works'>
        <h1 className='experiance'>{props.experiance}</h1>
        <div className='WorksContainer'>
          <div className='jobcontainer'>
          <div className='banking'>
          <div className='container'>
          <h2 className="title">
            <span class="title-word title-word-1">{props.bankingandtraining1}</span>
            <span class="title-word title-word-2">{props.bankingandtraining2}</span>
            <span class="title-word title-word-3">{props.bankingandtraining3}</span>
            <span class="title-word title-word-4">{props.bankingandtraining4}</span>
          </h2>
        </div>
            <div>
                <p>{props.jobdiscrone}</p><span>{props.joboneyear}</span>
            </div>
            </div>
          </div>
          <div className='jobcontainer'>
          <div className='Foodco'>
          <div className='container'>
          <h2 className="title">
            <span class="title-word title-word-1">{props.FoodcoIndustry1}</span>
            <span class="title-word title-word-2">{props.FoodcoIndustry2}</span>
            <span class="title-word title-word-3">{props.FoodcoIndustry3}</span>
            <span class="title-word title-word-4">{props.FoodcoIndustry4}</span>
          </h2>
        </div>
            <div>
                <p>{props.jobdiscrtwo}</p><span>{props.jobtwoyear}</span>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
export default Works

