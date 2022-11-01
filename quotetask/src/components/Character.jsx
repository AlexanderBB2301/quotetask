import React, { Component } from "react";
import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";
class Character extends Component {
  render() {
    //infor we want from api stored in state
    const {
      image,
      character: name,
      quote,
      characterDirection,
    } = this.props.character;

    if (characterDirection === "Left") {
      return (
        <div class="characterContainer">
          <div class="item">
            <Name name={name} />
          </div>
          <div class="item">
            <Image image={image} name={name} />
          </div>
          <div class="item">
            <Quote quote={quote} />
          </div>
        </div>
      );
    }

    return (
      <div class="characterContainer">
        <div class="item">
          <Name name={name} />
        </div>
        <div class="item">
          <Quote quote={quote} />
        </div>
        <div class="item">
          <Image image={image} name={name} />
        </div>
      </div>
    );
  }
}

export default Character;
