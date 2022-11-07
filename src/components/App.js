import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [cash, setCash] = useState(100)

  function payment(cost) {
    setCash(cash => cash - cost)
  }

  return (
    <div className="app">
      <SushiContainer cash={cash} api={API} payment={payment} />
      <Table cash={cash}/>
    </div>
  );
}

export default App;
