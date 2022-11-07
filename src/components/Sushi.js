import React, {useState} from "react";

function Sushi({name, image, price, created, id, cash, payment}) {
  const [eaten, setEaten] = useState(false)
  
  function handleClick() {
    if ( (cash - price) < 0 ) {
      return
    }
    setEaten(true)
    payment(price)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
