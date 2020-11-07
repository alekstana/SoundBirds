import {API_URL} from './config'
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'

//// -----import all components here----- ////
import MyNav from './components/MyNav'
// import Footer from './components/Footer.js'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import MusicSearch from './components/MusicSearch'


//// ------------------------------------ ////



class App extends Component {


  state = {
    loggedInUser: null,
    errorMessage: null
  }



  handleSignUp = (event) => {
    event.preventDefault()
    const {name, email, password} = event.target
    console.log(event.target)
    axios.post(`${API_URL}/signup`, {
      name: name.value,
      email: email.value,
      password: password.value
    }, {withCredentials:true} )
    .then((response) => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/dashboard')
      })
    })
     .catch((error) => {
       this.setState({
         errorMessage:error.response.data
       })
     })
  }

  handleSignIn = (event) => {
    event.preventDefault()
    const {email, password} = event.target
    axios.post(`${API_URL}/signin`, {
      email: email.value,
      password: password.value
    }, {withCredentials:true})
 
    .then((response) => {
      this.setState({
        loggedInUser: response.data,
      }, () => {
        this.props.history.push('/dashboard')
      })
    })
    .catch((err)=> {
      this.setState({
        errorMessage:err.response.data.error
      })
    })
      
  }


  handleLogOut = (e) => {
    e.preventDefault()
    console.log("hello")
    axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
      .then(() => {
        console.log("loging out")
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/')
        })  
      })
      .catch(err => console.log(err))
  }



  handleArtistSearch = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    let name = e.target.name.value;
    axios.post(`${API_URL}/artist-search`, {name})
    .then((response) => {
      console.log("data send")
      console.log(response)
    })
  }






  render() {

    const { loggedInUser } = this.state

    return (
      <div>
          <div>
             <MyNav loggedInUser={loggedInUser} onLogout={this.handleLogOut}/>
          </div>
          <div>
             <Switch>
                  <Route exact path="/" component={LandingPage}/>
                  <Route path="/signup" render={(routeProps) => {
                    return <SignUp onSignUp={this.handleSignUp} {...routeProps}/>
                  }}/>
                  <Route path="/signin" render={(routeProps) => {
                    return <SignIn onSignIn={this.handleSignIn} {...routeProps}/>
                  }}/>

                  <Route path="/dashboard" render={(routeProps) => {
                    return <Dashboard loggedInUser={loggedInUser} {...routeProps}/>
                  }}/>

                  <Route path="/create-playlist" render={(routeProps) => {
                    return <MusicSearch loggedInUser={loggedInUser} onArtistSearch={this.handleArtistSearch} {...routeProps}/>
                  }}/>

             </Switch>


          </div>


      </div>
    )
  }
}


export default withRouter(App)