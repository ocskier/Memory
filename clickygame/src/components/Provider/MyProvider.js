import React,{Component} from "react"; 

import MyContext from "../Context";
import friends from "../../friends.json";

import jjdb from "../../DB/db.js";

declare var $ : any; 

class MyProvider extends Component {
    
    state = {
        friends: friends,
        score: 0,
        wrong: 0,
        guesses: 0,
        chosen: [],
        allDisabled: false,
        reset: false,
        lowScore: "-"
    };

    componentDidMount = () => {
        this.getLowScore(() => {
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
                            if (this.state.score === 12 && (this.state.wrong < this.state.lowScore)) {
                                this.setState({
                                    lowScore: this.state.wrong
                                }, () => this.updateLowScore());
                            }
                        }
                    )
                })
            ));
        });
    }

    getLowScore = (callback) => {
        jjdb.on("child_added", (snapshot) => {
            this.setState({
                lowScore: snapshot.val()
            });
        });
        callback();
    }

    updateLowScore = () => {
        jjdb.orderByChild('score').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                jjdb.child(childSnapshot.key).set({
                    score: this.state.lowScore
                });
            });
        });
    }

    shakeImgs = (callback) => {
        this.setState({
            reset: true
        });
        callback();
    }

    resetImgs = () => {
        this.setState({
            friends: this.state.friends.map((friend) => {
                friend = {
                    ...friend,
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
            friend = {
                ...friend,
                id: index + 1
            }
            return friend
        });
        return doubledFriends
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
                friend = {
                    ...friend,
                    matched: true
                }
            }
            return friend
        });
        return remainingFriends
    }

    // copyFriends = () => {
    //     const friendsCopy = friends;
    //     return friendsCopy
    // }

    // shuffleFriends = () => {
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    //   const friends = this.randomizeFriends(this.state.friends);
    //   // this.state.friends.filter(friend => friend.id !== id);
    //   // Set this.state.friends equal to the new friends array
    //   // this.setState({ score: this.state.score+1});
    //   this.setState({ friends: friends },() => console.log(this.state.friends));
    // }

    render () {
        return (
            // eslint-disable-next-line react/react-in-jsx-scope
            <MyContext.Provider 
                value = {{
                    myGameState: this.state,
                    cardClickHandler: (e,id) => {
                        e.preventDefault();
                        const friendIndex = this.state.friends.findIndex(friend => friend.id === id);
                        const {
                            name,
                            image
                        } = this.state.friends[friendIndex];
                        console.log(friendIndex);
                        this.setState({
                                friends: this.state.friends.map((friend) => {
                                    if (friend.id === id) {
                                        friend = {
                                            ...friend,
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
                    },
                    startOver: (e) => {
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
                }}>{this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;