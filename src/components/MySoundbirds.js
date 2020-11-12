import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

class MySoundbirds extends Component {
  state = {
    myMatches: [],
    selectedMatch: null,
  };

  handleShowMatches = () => {
    axios
      .post(`${API_URL}/my-matches`, {}, { withCredentials: true })
      .then((response) => {
        //  console.log(response);
        this.setState({
          myMatches: response.data,
        });
      })
      .catch((err) => {
        console.log("couldn't fetch the matches", err);
      });
  };

  handleSelectMatch = (match) => {
    this.setState({
      selectedMatch: match,
    });
  };

  componentDidMount() {
    this.handleShowMatches();
  }



  render() {
    const { myMatches } = this.state;

    return (
      <div>
        <Link
          className="btn-outline-bottom"
          to="/dashboard"
          style={{ textDecoration: "none" }}
        >
          {" "}
          To the Dashboard
        </Link>

        <h2>Here are people with matching music taste</h2>
        <hr></hr>
        {myMatches &&
          myMatches.map((match) => {
            return (
              <div
                key={match.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  border: "solid 1px #6200ee",
                  padding: "30px",
                  margin: "15px",
                  borderColor: "linear-gradient(to right,white, #6200ee)",
              
                }}
              >
                <div style={{ paddingRight: "20px" }}>
                  {match.imageUrl ? (
                    <div className="image-container2">
                      <img
                        className="image2"
                        src={match.imageUrl}
                        alt="profile image"
                      />
                    </div>
                  ) : (
                    <object
                      className="image-container2"
                      data="/images/Avatar.jpg"
                      type="image/png"
                    >
                      <img
                        className="image2"
                        src={match.imageUrl}
                        alt="profile image"
                      />
                    </object>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWarp: "wrap",
                    alignContent: "center",
                  }}
                >
                  <div>
                    <h3>{match.name} ♩</h3>
                    <div style={{ fontStyle: "italic", paddingBottom: "10px" }}>
                      {match.aboutMe ? match.aboutMe : null}
                    </div>
                          <div style={{display: "flex", flexWarp: "wrap", padding: "10px 0px"}}>
                          <Link
                            to={{
                              pathname: "/soundbird-playlist/",
                              state: { selectedMatch: match },
                            }}
                            className="btn-outline"
                            style={{ textDecoration: "none" }}
                          >
                             See {match.name}'s playlist
                          </Link>

                          <Link
                            to={{
                              pathname: `/messenger`,
                              state: { selectedMatch: match },
                            }}
                            className="btn-filled"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            Say Hello{" "}
                          </Link>
                          </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default MySoundbirds;
