import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';

class FilterMissions extends React.Component {
        filters={
            launch_years:this.returnListOfYears(),
            launch_success:[true, false],
            land_success:[true, false]
        }

    returnListOfYears(){
        let endYear = new Date().getFullYear();
        let startYear = 2006;
        let list = [];
        for(let i=startYear; i<=endYear;i++){
           list.push(i)
        }
        return list;
    }

    render(){
      return(
          <div style={{background: '#fff', padding:20, borderRadius:10, width: 190,marginLeft: 15,marginBottom: 20}}>
        <h4> Filters</h4>
        <div>
        <div>
            <p style={{textAlign: 'center',borderBottom: '1px solid #ccc', fontSize:14}}>Launch Year</p>
            <ul style={{listStyleType:'none', paddingInlineStart:0}} className="row">
            {this.filters.launch_years.map(year=>
            {return sessionStorage.getItem('currentFilters_stored') && JSON.parse(sessionStorage.getItem('currentFilters_stored')).launch_year===year?(<li key={year}  onClick={()=>this.props.onFilter(year, 'launch_year')} style={{pointerEvents:'none'}} className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
            backgroundColor: 'rgb(138, 237, 53)',
            padding: '6px 12px',
            marginTop: 10,
            minWidth:50,
            fontWeight: 500}}>{year}</Badge>
        </li>):(<li key={year}  onClick={()=>this.props.onFilter(year, 'launch_year')} className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
                backgroundColor: 'rgb(194, 218, 150)',
                padding: '6px 12px',
                marginTop: 10,
                minWidth:50,
                fontWeight: 500}}>{year}</Badge>
            </li>)})}
            </ul>
        </div>
        <div>
        <p style={{textAlign: 'center',borderBottom: '1px solid #ccc', fontSize:14}}>Successful Launch</p>
        <ul  style={{listStyleType:'none', paddingInlineStart:0}} className="row">
        {this.filters.launch_success.map(result=>{
            return sessionStorage.getItem('currentFilters_stored') && JSON.parse(sessionStorage.getItem('currentFilters_stored')).launch_success===result?(<li key={'launch_'+result} onClick={()=>this.props.onFilter(result, 'launch_success')} style={{pointerEvents:'none'}} className="col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
            backgroundColor: 'rgb(138, 237, 53)',
            padding: '6px 12px',
            marginTop: 10,
            minWidth:50,
            fontWeight: 500}}>{(result)?'True':'False'}</Badge>
            </li>):(<li key={'launch_'+result} onClick={()=>this.props.onFilter(result, 'launch_success')} className="col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
            backgroundColor: 'rgb(194, 218, 150)',
            padding: '6px 12px',
            marginTop: 10,
            minWidth:50,
            fontWeight: 500}}>{(result)?'True':'False'}</Badge>
            </li>)
        }
            )}
            </ul>
        </div>
        <div>
        <p style={{textAlign: 'center',borderBottom: '1px solid #ccc', fontSize:14}}>Successful Landing</p>
        <ul  style={{listStyleType:'none', paddingInlineStart:0}} className="row">
        {this.filters.land_success.map(result=>
            {return sessionStorage.getItem('currentFilters_stored') && JSON.parse(sessionStorage.getItem('currentFilters_stored')).land_success===result?(<li key={'land_'+result} onClick={()=>this.props.onFilter(result, 'land_success')} style={{pointerEvents:'none'}} className="col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
            backgroundColor: 'rgb(138, 237, 53)',
            padding: '6px 12px',
            marginTop: 10,
            minWidth:50,
            fontWeight: 500}}>{(result)?'True':'False'}</Badge>
            </li>):(<li key={'land_'+result} onClick={()=>this.props.onFilter(result, 'land_success')} className="col-sm-6 col-md-6 col-lg-6"><Badge  variant="success" style={{    color: '#000',
            backgroundColor: 'rgb(194, 218, 150)',
            padding: '6px 12px',
            marginTop: 10,
            minWidth:50,
            fontWeight: 500}}>{(result)?'True':'False'}</Badge>
            </li>)})}
            </ul>
        </div>
        </div>
        </div>
      ) 
    }

}

export default FilterMissions