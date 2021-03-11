import React from 'react';
import JobCard from './JobCard';

const CardList = ({ jobs }) => {
    

    return (
        <div>
            {
            jobs.map ((item, i) => {
                return   (
                    <JobCard 
                        key={i} 
                        id={jobs[i].id} 
                        company={jobs[i].company} 
                        logo={jobs[i].logo} 
                        position={jobs[i].position} 
                        featured={jobs[i].featured} 
                        new={jobs[i].new} 
                        postedAt={jobs[i].postedAt} 
                        contract={jobs[i].contract} 
                        languages={jobs[i].languages} 
                        tools={jobs[i].tools} 
                        location={jobs[i].location}
                    />
                 );
                })
            }     
        </div>
    );
}

export default CardList;

