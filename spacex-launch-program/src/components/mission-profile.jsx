
import React from 'react'

class MissionProfile extends React.Component {
    render(){
       return (<div style={{padding:20,borderRadius:10,minWidth:190,maxWidth:190, margin:10, backgroundColor:'#fff'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           <div style={{backgroundColor: '#ccc',width: 150}}>
           <img style={{width: 150,height: 160}} src={this.props.mission.links.mission_patch_small} alt="patch"/>
           </div>
           <div style={{fontSize: 14,padding: '10px 0',fontWeight: 700, color:'#1345ff'}}>{this.props.mission.mission_name} #{this.props.mission.flight_number}</div>
           <div style={{fontSize:14}}> 
               <h4  style={{fontSize:14}}>Mission Ids:</h4>
               <ul style={{color:'#1345ff'}}>
       {this.props.mission.mission_id.map(id=><li key={'key_'+id}>{id}</li>)}
               </ul>
           </div>
           <div>
       <h4 style={{fontSize:12}}>Launch Year:<span style={{color:'#1345ff'}}>{this.props.mission.launch_year}</span></h4>
           </div>
           <div>
       <h4 style={{fontSize:12}}>Successful Launch:<span style={{color:'#1345ff'}}>{this.props.mission.launch_success.toString()}</span></h4>
           </div>
           <div>
       <h4 style={{fontSize:12}}>Successful Landing:<span style={{color:'#1345ff'}}>{this.props.mission.launch_landing}</span></h4>
           </div>
       </div>)
    }
}

export default MissionProfile