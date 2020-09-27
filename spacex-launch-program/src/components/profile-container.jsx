
import React from 'react'
import {Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MissionProfile from '../components/mission-profile'
import FilterMissions from './filter-missions';

class ProfileContainer extends React.Component {
    
    urlProfiles="https://api.spacexdata.com/v3/launches?limit=100"
    state={
        missions:[],
        selectedFilters:{
            launch_success:false,
            land_success:false,
            launch_year:null,
            active_params:[]
        },
        dataWait:true
    }
    async getProfiles(url){
        this.setState({dataWait:true})
        let profileData=await fetch(url);
        return profileData.json();
    }
    constructor(){
        super();
        this.getProfiles(this.urlProfiles).then(data=>{
            this.setState({missions:data})
            if(sessionStorage.getItem('currentFilters_stored')!==null){
                this.setState({selectedFilters:JSON.parse(sessionStorage.getItem('currentFilters_stored'))})
            }
            this.setState({dataWait:false})
        })
        
    }
    
     
handleFilters=(value, filterType)=>{
    let currentFilters=this.state.selectedFilters
    let filterIndex = currentFilters.active_params.indexOf(filterType)
    let currentUrl = this.urlProfiles
    if(currentFilters.active_params.includes('launch_year') && filterType==='launch_year'){  
    }else{
        filterIndex!==-1?currentFilters.active_params.splice(filterIndex,1):currentFilters.active_params.push(filterType)
    }
    currentFilters[filterType] = value
    for(const param of currentFilters.active_params){
        currentUrl +='&amp;'+param+'='+currentFilters[param]
    }
    this.getProfiles(currentUrl).then(data=>{
        this.setState({missions:data})
        this.setState({dataWait:false})
    })
    this.setState({selectedFilters:currentFilters})
    sessionStorage.setItem('currentFilters_stored', JSON.stringify(currentFilters))
}
        
    render(){
        
       return (
           <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                   <FilterMissions onFilter={this.handleFilters}></FilterMissions>
               </div>
       <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 "  style={{top: -10}}>
           <div className='row'  style={{marginLeft:6, minHeight:200}}>
           {this.state.dataWait?<Spinner style={{ position: "relative",left: "40%",top: 100}} animation="border" variant="primary" />:this.state.missions.map(mission=>
            <MissionProfile key={mission.mission_name}  mission={mission}>
            </MissionProfile>)}
            </div>
       </div>
       </div>
       )
}
}

export default ProfileContainer