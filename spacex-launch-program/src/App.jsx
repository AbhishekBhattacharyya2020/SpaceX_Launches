import React from 'react'
import Header from '../src/components/header'
import ProfileContainer from '../src/components/profile-container'
import Footer from '../src/components/footer'

class App extends React.Component {
    render(){
        return(
          <div style={{margin:'auto !important'}}>
              <Header />
              <ProfileContainer />
              <Footer />
          </div>
        )
    }
}

export default App