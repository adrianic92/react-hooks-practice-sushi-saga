import React from "react";

function MoreButton({addSushi}) {

  function handleClick() {
    addSushi()
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
