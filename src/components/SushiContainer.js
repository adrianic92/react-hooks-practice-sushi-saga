import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({api, cash, payment}) {
  const [items, setItems] = useState([])
  const [four, setFour] = useState([0, 1, 2, 3])
  

  function addSushi() {
    const fourMore = four.map(number => number + 4)
    setFour(fourMore)
  }

  useEffect( () => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => setItems(data))
  }, [])

  const allSushi = items.map(item => {
    return (
      <Sushi key={item.id} id={item.id} name={item.name} image={item["img_url"]} price={item.price} created={item["created_at"]} cash={cash} payment={payment} />
    )
  })
  
  return (
    <div className="belt">
      {allSushi[four[0]]}{allSushi[four[1]]}{allSushi[four[2]]}{allSushi[four[3]]}
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
