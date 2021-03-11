import React, { Component } from 'react';
import CardList from './JobCard/CardList';
import {jobs} from './data';
import SearchBox from './SearchBox';
import './JobCard/JobCard.css';
import 'tachyons';
import './App.css';



class App extends Component {
    constructor (){
        super()
        this.state = {
            jobs: jobs,
            searchfield: ''
        }
    }

    

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
       // console.log(event.target.value)
    }

    render () {
        const filteredJobs = this.state.jobs.filter(job => 
                {
                   return job.position.toLowerCase().includes(this.state.searchfield.toLowerCase())
                    
                }
        //     {
        //     job.languages.map((e, j) => {
        //         if (e.toLowerCase() === this.state.searchfield.toLowerCase()) {
        //             console.log(this.state.jobs[j])  
        //             console.log(this.state.jobs.indexOf(this.state.jobs[j])) 
        //          }})
        //          return this.state.job;
        //         //  } else
        //         // return console.log(0)
        //    }
           )
    
               //console.log(e.toLowerCase().includes(this.state.searchfield.toLowerCase())))
             //return console.log(job.position.toLowerCase().includes(this.state.searchfield.toLowerCase()))
             // return (job.languages.some(e => {
             //   return e.languages.toLowerCase().includes(this.state.searchfield.toLowerCase())
           // }))
    
       // console.log(filteredJobs);
        return (
            <div className= 'tc'>
                <h1 className='theme'></h1>
                <h1 className='f1'>Job opportunities</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList jobs={filteredJobs} />
            </div>
    
        );
    }
    
}

export default App;