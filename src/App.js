import {API_URL} from './config'
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'
import './App.css';
import io from "socket.io-client";


//// -----import all components here----- ////
import MyNav from './components/MyNav'
// import Footer from './components/Footer.js'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import CreatePlaylist from './components/CreatePlaylist'
import TracksDetail from './components/TracksDetail'
import ShowPlaylist from './components/ShowPlaylist'
import MySoundbirds from './components/MySoundbirds'
import EditProfile from './components/EditProfile'
import SoundbirdPlaylist from './components/SoundbirdPlaylist'
import Messenger from './components/Messenger'
import Mailbox from './components/Mailbox'

//// ------------------------------------ ////



class App extends Component {


  state = {
    loggedInUser: null,
    errorMessage: null,
    myArtists: [],
    myTracks: [],
    myPlaylist: [],
    myMessages:[],
    
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


// Search for Music

  handleNullifyTracks = () => {
    this.setState({
      myTracks: null,
    })
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
          myTracks: response.data.body.tracks.items
        })
    })
      .catch((err) =>{
        console.log(err)
      })
  }


/// add Tracks to your playlist 
  handleSelectTrack = (track) => {
    console.log(`track selected ${track.id}`)
    axios.post(`${API_URL}/add-track`, {track}, {withCredentials:true} )
    .then((response) => {
      console.log(response)
//////implement a visual element - so the user can see that he/she added the song
    })
  }


///// Edit User Profile

handleEditProfile = (event) => {
  event.preventDefault()
  const {name, aboutMe, image} = event.target
  let imageFile = image.files[0]
  let uploadForm = new FormData()
  uploadForm.append('imageUrl', imageFile)
  
 
    ///upload from the server
    axios.post(`${API_URL}/upload`, uploadForm)
      .then((response) => {
    
        axios.post(`${API_URL}/edit-profile`, {
          name: name.value,
          aboutMe: aboutMe.value,
          imageUrl: response.data.image
        }, {withCredentials:true})
        .then((response) =>{
          console.log(response)
            this.setState({
              loggedInUser:response.data
            }, () => {
              this.props.history.push('/dashboard')
            })      
        })
         .catch((err) => {
           console.log("could not update a user")
         })
      })
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
                  {/* <Route exact path="/" component={LandingPage}/> */}
                  <Route exact path="/" render={(routeProps) => {
                    return <LandingPage loggedInUser={loggedInUser} {...routeProps}/>
                  }}/>

                  <Route path="/signup" render={(routeProps) => {
                    return <SignUp onSignUp={this.handleSignUp} {...routeProps}/>
                  }}/>
                  <Route path="/signin" render={(routeProps) => {
                    return <SignIn onSignIn={this.handleSignIn} {...routeProps}/>
                  }}/>

                  <Route path="/dashboard" render={(routeProps) => {
                    return <Dashboard loggedInUser={loggedInUser} onShowPlaylist={this.handleShowPlaylist} {...routeProps}/>
                  }}/>

                  <Route exact path="/create-playlist" render={(routeProps) => {
                    return <CreatePlaylist loggedInUser={loggedInUser} onMusicSearch={this.handleMusicSearch} myArtists={this.state.myArtists} myTracks={this.state.myTracks} onSelectTrack={this.handleSelectTrack} onNullifyTracks={this.handleNullifyTracks} {...routeProps}/>
                  }}/>


                  <Route path="/myplaylist" render={(routeProps) => {
                    return <ShowPlaylist loggedInUser={loggedInUser}  onShowPlaylist={this.handleShowPlaylist} myPlaylist={this.state.myPlaylist} {...routeProps}/>
                  }}/>     


                  <Route path="/find-soundbird" render={(routeProps) => {
                    return <MySoundbirds loggedInUser={loggedInUser}  {...routeProps}/>
                  }}/>    

                  <Route path="/edit-profile" render={(routeProps) => {
                    return <EditProfile loggedInUser={loggedInUser} onEditProfile={this.handleEditProfile} {...routeProps}/>
                  }}/> 


                  <Route path="/soundbird-playlist" render={(routeProps) => {
                    return <SoundbirdPlaylist loggedInUser={loggedInUser}  {...routeProps}/>
                  }}/> 
                  <Route path="/messenger" render={(routeProps) => {
                    return <Messenger loggedInUser={loggedInUser}  {...routeProps}/>
                  }}/> 

                  <Route path="/mailbox" render={(routeProps) => {
                    return <Mailbox loggedInUser={loggedInUser}  {...routeProps}/>
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