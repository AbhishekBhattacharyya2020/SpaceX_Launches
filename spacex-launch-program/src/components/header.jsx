import React from 'react'
import MediaQuery from 'react-responsive'

class Header extends React.Component {
    state={heading:'SpaceX Launch Programs'}

    render(){
        return(
            <h2>{this.state.heading}</h2>
        )
    }
}

export default Header