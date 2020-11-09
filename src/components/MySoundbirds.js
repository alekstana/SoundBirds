import React, { Component } from 'react'
import axios from 'axios'
import {API_URL} from '../config'
import { Link  } from 'react-router-dom'



class MySoundbirds extends Component {


    state = {
        myMatches:[]
   }


 handleShowMatches = () => {
   axios
     .post(`${API_URL}/my-matches`, {}, {withCredentials:true})
     .then((response) => {
       console.log(response);
       this.setState({
        myMatches: response.data
       });
     })
     .catch((err) => {
       console.log("couldn't fetch the matches", err);
     });
 };


 componentDidMount() {
    this.handleShowMatches();
  }



    render() {

        const { myMatches } = this.state;

        return (
            <div>
            <Link className="btn-outline-bottom" to="/dashboard" style={{textDecoration:'none'}}> To the Dashboard</Link>
    
            <h2>Here are people with matching music taste</h2>
            <hr></hr>
            {myMatches &&
                myMatches.map((match) => {
                return (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p key={match.id}>
                      <h3>{match.name}</h3>
                      <p> See soundbird's playlist </p>
                      <button className="btn-filled" >Say Hello</button>
                    </p>
                    
                  </div>
                );
              })}
                  
          </div>
        )
    }
}


export default MySoundbirds;