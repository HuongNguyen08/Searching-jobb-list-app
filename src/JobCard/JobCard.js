import React from 'react';
import './JobCard.css';
//import photosnap from '../images/photosnap.svg';


const JobCard = (props) => {
    return (
        <div className='card'>
            <div className='logo'>
                <img src={require('../images/' + props.logo)} alt="company-logo" />
            </div>
            <div className='descriptions'>
                <div className='firstRow'>
                    <p>{props.company}</p>
                    {props.new ? <div className='highlight new'>NEW!</div> : <div></div>}
                    {props.featured ? <div className='highlight featured'>FEATURED</div> : <div></div>}
                </div>
                <div className='secondRow'>
                    <h2>{props.position}</h2>
                </div>
                <div className='thirdRow'>
                    <p className='postedAt'>{props.postedAt}</p>
                    <p className='contract'>{props.contract}</p>
                    <p className='location'>{props.location}</p>
                </div>          
            </div>
            <div className='tags'>
                    {props.languages.map((element, i) => <button className='btn' key={i}>{element}</button>)}
                    {props.tools.map((element, i) => <button className='btn' key={i}>{element}</button>)}
            </div>
        </div>
    );
}

export default JobCard;