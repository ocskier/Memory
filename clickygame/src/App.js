import React, { Component } from "react";
import {Modal} from 'react-materialize'


import Jumbotron from "./components/Header";
import Footer from "./components/Footer"
import FriendCard from "./components/FriendCard";
import StillCard from "./components/StillCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


declare var $ : any;
const winText = "You have a Match!";
const still = "./Fortnite/BX-XN.jpg"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    wrong: 0,
    guesses: 0,
    chosen: [],
    allDisabled: false,
    reset: false,
    lowScore: localStorage.getItem("score") ? localStorage.getItem("score") : 99
  };

  componentDidMount = () => {

    const friendsX2 = this.duplicFriends(friends);
    this.shakeImgs(() => this.setState({
        friends: this.shuffleArray(friendsX2)
      },
      () => $('#modal1').modal({
        onCloseStart: () => this.setState({
            chosen: []
          },
          () => {
            this.resetImgs(); 
            if (this.state.score===12 && (this.state.wrong < this.state.lowScore)) {
              this.setState({lowScore: this.state.wrong}, () => {
                localStorage.setItem("score",this.state.lowScore);
                console.log(localStorage.getItem("score"));
              });
            }
          }
        )}
      )
    )
    );
  }

  startOver = (e) => {
    e.preventDefault();
    const origFriends = this.duplicFriends(friends); 
    this.shakeImgs(() => this.setState({
        friends: this.shuffleArray(origFriends),
        score: 0,
        wrong: 0,
        guesses: 0,
        chosen: []
      },
      () => console.log(this.state.friends)));
  }

  shakeImgs = (callback) => {
    this.setState({reset: true});
    callback();
  }

  cardClickHandler = (e,id) => {
    e.preventDefault();
    const friendIndex = this.state.friends.findIndex(friend => friend.id===id);
    const {name,image} = this.state.friends[friendIndex];
    console.log(friendIndex);
    this.setState({
        friends: this.state.friends.map((friend) => {
          if (friend.id === id) {
            friend = { ...friend,
              userSelected: true
            }
          }
          return friend
        }),
        guesses: this.state.guesses + 1,
        chosen: this.state.chosen.concat({
          id: id,
          name: name,
          image: image
        }),
        reset: false
      },
      () => {
        console.log(this.state);
        this.handleGuesses();
      });
  }

  handleGuesses = () => {
    if (this.state.guesses === 2 && (this.state.chosen[0].name === this.state.chosen[1].name)) {
      this.setState({
          friends: this.removeMatch(),
          score: this.state.score + 1,
          guesses: 0
        },
        () => $('#modal1').modal('open')
      )
    } else if (this.state.guesses === 2 && !(this.state.chosen[0].name === this.state.chosen[1].name)) {
      console.log("Loaded");
      this.setState({
        wrong: this.state.wrong + 1,
        guesses: 0,
        chosen: [],
        allDisabled: true
      }, () => {
        setTimeout(this.resetImgs, 3000)
      })
    }
  }

  removeMatch = () => {
    // const remainingFriends = this.state.friends.filter(friend => friend.id !== this.state.chosen[0].id)
    // .filter(friend => friend.id !== this.state.chosen[1].id);
    const remainingFriends = this.state.friends.map((friend) => {
      if ((friend.id === this.state.chosen[0].id) || (friend.id === this.state.chosen[1].id)) {
        friend = { ...friend,
          matched: true
        }
      }
      return friend
    });
    return remainingFriends
  }

  resetImgs = () => {
    this.setState({
      friends: this.state.friends.map((friend) => {
        friend = { ...friend,
          userSelected: false
        }
        return friend
      }),
      allDisabled: false
    }, () => console.log(this.state));
  }

  shuffleArray = (friends) => {
    const newArray = friends;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray
  }

  duplicFriends = (friends) => {
    const doubledFriends = friends.concat(friends).map((friend, index) => {
      friend = { ...friend,
        id: index + 1
      }
      return friend
    });
    return doubledFriends
  }

  copyFriends = () => {
    const friendsCopy = friends;
    return friendsCopy
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
        <Jumbotron lowscore={this.state.lowScore} score={this.state.score} wrong={this.state.wrong} startOver={this.startOver}>Memory
        </Jumbotron>
        <Wrapper>
          <Title>{this.state.score !== 12 ? "Find a Fortnite Match!" : "You won!" }</Title>
          {this.state.friends.map(friend => (
            friend.userSelected ? 
            <FriendCard
              cardClickHandler={this.cardClickHandler}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            /> :
            <StillCard
              cardClickHandler={this.cardClickHandler}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={still}
              hidden={friend.matched}
              reset={this.state.reset}
              disableAll={this.state.allDisabled}
            />
          ))}
          <Modal id="modal1" header={winText} fixedFooter><br></br>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            { this.state.chosen.map(friend => (
              <FriendCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
              />
            ))
            }
            </div>
          </Modal>
        </Wrapper>
        <Footer>Made with 
          <a className="orange-text text-lighten-3" href="http://materializecss.com"> Materialize
          </a>
        </Footer>
      </div>
    );
  }
}

export default App;
