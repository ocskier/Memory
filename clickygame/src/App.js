import React, { Component } from "react";

import Jumbotron from "./components/Header";
import Footer from "./components/Footer"
import FriendCard from "./components/FriendCard";
import StillCard from "./components/StillCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

const still = "/question-mark-1872665_1280.jpg"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    chosen: []
  };

  componentDidMount = () => {
    const friendsX2 = this.duplicFriends(friends);
    this.setState({
      friends: this.shuffleArray(friendsX2)
    }, () => console.log(this.state.friends));
  }

  startOver = (e) => {
    console.log(e);
    e.preventDefault();
    const origFriends = this.duplicFriends(friends); 
    this.setState({friends: this.shuffleArray(origFriends)},() => console.log(this.state.friends));
  }

  cardClickHandler = (e,id) => {
    e.preventDefault();
    const copyFriends = this.state.friends;
    const friendIndex = copyFriends.findIndex(friend => friend.id===id);
    const status = copyFriends[friendIndex].userSelected;
    status ? copyFriends[friendIndex].userSelected = false : copyFriends[friendIndex].userSelected = true;
    this.setState({friends: copyFriends,chosen: this.state.chosen.concat(id)},() => console.log(this.state)); 
  }

  shuffleArray = (friends) => {
    const newArray = friends;
    for (let i = newArray.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [newArray[i],newArray[j]] = [newArray[j],newArray[i]];
    }
    return newArray
  } 

  duplicFriends = (friends) => {
    const doubledFriends = friends.concat(friends).map((friend,index) => {
      friend = {...friend, id:index+1}
      return friend
    });
    return doubledFriends
  }

  // shuffleFriends = () => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.randomizeFriends(this.state.friends);
  //   // this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   // this.setState({ score: this.state.score+1});
  //   this.setState({ friends: friends },() => console.log(this.state.friends));
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} startOver={this.startOver}>Clicky Game
        </Jumbotron>
        <Wrapper>
          <Title>Pick a Card!</Title>
          {this.state.friends.map(friend => (
            friend.userSelected ? 
            <FriendCard
              cardClickHandler={this.cardClickHandler}
              id={friend.id}
              key={friend.id}
              disabled={friend.userSelected}
              name={friend.name}
              image={friend.image}
            /> :
            <StillCard
              cardClickHandler={this.cardClickHandler}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={still}
            />
          ))}
        </Wrapper>
        <Footer>Made by 
          <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize
          </a>
        </Footer>
      </div>
    );
  }
}

export default App;
