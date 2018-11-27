import React, { Component } from "react";
import "./Wrapper.css";
import people from "../people.json";
import FriendCard from "../FriendCard/FriendCard";
import Navbar from "../Navbar/Navbar";


class Wrapper extends Component {

    state = {
      score: 0,
      topScore: 0,
      people: people,
      clicked: [],
    };

    handleClick = (event) => {
        
        event.preventDefault();
        console.log(event.target)

        let name = event.target.name;
        let array = this.state.clicked;

        if (!this.state.clicked.includes(name)) {

            array.push(name);
            console.log(array)

            let newScore = this.state.score;
            newScore+=1;


            this.setState({clicked: array})
            this.setState({score: newScore})

            if (newScore === 12) {
                this.setState({status: `You Win!`})
                this.setState({score: 0})
                this.setState({clicked: []})
            }
            
            if (newScore > this.state.topScore) {
                this.setState({topScore: newScore})
            }

        } else {

           this.setState({clicked: []})
           this.setState({status: `You already clicked this person. Try again`})
           this.setState({score: 0})
        }

        let a = this.state.people;

        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        this.setState({characters: a});
    }

    render() {
        return (
          <div>
           { <Navbar 
  
              key = {1}
              score = {this.state.score}
              topScore = {this.state.topScore}
              status = {this.state.status}
  
           />}
            <div className="container" id="card-container">
              <div className="row">
                  {
                      this.state.people.map(
                          character => <FriendCard 
                              key          ={character.id}
                              id           ={character.id}
                              name         ={character.name}
                              image        ={character.image}
                              occupation   ={character.occupation}
                              handleClick  ={this.handleClick}
                          />
                      ) 
                  }
              </div>
            </div>
          </div>
        );
      }
    }
  
  export default Wrapper;