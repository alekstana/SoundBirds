import {API_URL} from './config'
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'
import './App.css';


//// -----import all components here----- ////
import MyNav from './components/MyNav'
// import Footer from './components/Footer.js'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import CreatePlaylist from './components/CreatePlaylist'
import ArtistDetail from './components/ArtistDetail'
import TracksDetail from './components/TracksDetail'


//// ------------------------------------ ////



class App extends Component {


  state = {
    loggedInUser: null,
    errorMessage: null,
    myArtists: [],
    myTracks: [],
    singleArtist: []
  }

  componentDidMount() {
    if (!this.state.loggedInUser) {
        axios.get(`${API_URL}/user`, {withCredentials: true})
        .then((response) => {
          this.setState({
            loggedInUser:response.data
          })
        })
        .catch((error) => {
          this.setState({
            errorMessage:error.response.data
          })
        })
    }
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
    axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
      .then(() => {
        // console.log("loging out")
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/')
        })  
      })
      .catch(err => console.log(err))
  }



  handleMusicSearch = (e, context) => {
    e.preventDefault()
    let name = e.target.name.value;
    console.log(context)
    console.log(name)
    axios.post(`${API_URL}/music-search`, {name, context})
      .then((response) => {
        let tracks = response.data.body.tracks.items
        console.log(response.data.body.tracks.items)
        this.setState({
          myArtists: response.data,
          myTracks: response.data.body.tracks.items
        },() => {
          this.props.history.push(`/find-tracks`)
        })
    })
      .catch((err) =>{
        console.log(err)
      })
  }



  handleSelectTrack = (artistId) => {
    console.log(`track selected ${artistId}`)
    // axios.get(`${API_URL}/find-tracks/${artistId}`)
    // .then((response) => {
    //   console.log(response)
    //   this.setState({
    //     singleArtist: response.data
    //   })
    // })
  }


  render() {

    const { loggedInUser, myArtists } = this.state

    return (
      <div >
      <div className="container-body">
          <div>
             <MyNav loggedInUser={loggedInUser} onLogout={this.handleLogOut}/>
          </div>
          <div className="mdc-layout-grid" className="container">
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

                  <Route exact path="/create-playlist" render={(routeProps) => {
                    return <CreatePlaylist loggedInUser={loggedInUser} onMusicSearch={this.handleMusicSearch} myArtists={this.state.myArtists} {...routeProps}/>
                  }}/>
                  <Route path="/create-playlist/:artistName" render={(routeProps) => {
                    return <ArtistDetail loggedInUser={loggedInUser} myArtists={this.state.myArtists} {...routeProps}/>
                  }}/>

                  <Route path="/find-tracks" render={(routeProps) => {
                    return <TracksDetail loggedInUser={loggedInUser} myTracks={this.state.myTracks} {...routeProps}/>
                  }}/>


             </Switch>


             


          </div>
         </div>
          <footer class="footer"> ♩ ♪ ♫ ♬</footer>

      </div>
    )
  }
}


export default withRouter(App)