import React from 'react'
import MediaQuery from 'react-responsive'

class Footer extends React.Component {
    state={developer_name:'Abhishek Bhattacharyya'}

    render(){
        return(
            <div style={{textAlign:'center', lineHeight:4}}>
                <span><span style={{fontWeight:700}}>Developed By: </span>{this.state.developer_name}</span>
            </div>
        )
    }
}

export default Footer