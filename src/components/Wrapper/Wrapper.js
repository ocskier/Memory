import React from "react";
import "./Wrapper.css";

import {Modal} from 'react-materialize';

import FriendCard from "../FriendCard";
import StillCard from "../StillCard";
import Title from "../Title";
import MyContext from "../Context";

const winText = "You have a Match!";
const still = "./Fortnite/BN-XN.jpg";

const Wrapper = () => (
    <MyContext.Consumer>
        {context => (
            <div className="wrapper">
                <Title>{context.myGameState.score !== 12 ? "Find a Fortnite Match!" : "You won!" }</Title>
                <div className="cardHolderDiv">
                    {context.myGameState.friends.map(friend => (
                    friend.userSelected ? 
                    <FriendCard
                        // cardClickHandler={context.cardClickHandler}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                    /> :
                    <StillCard
                        cardClickHandler={context.cardClickHandler}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={still}
                        hidden={friend.matched}
                        reset={context.myGameState.reset}
                        disableAll={context.myGameState.allDisabled}
                    />
                    ))}
                </div>
                <Modal id="modal1" header={winText} fixedFooter><br></br>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                { context.myGameState.chosen.map(friend => (
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
            </div>
        )}
    </MyContext.Consumer>
)
export default Wrapper;
