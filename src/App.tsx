// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import React, { useState } from "react";
import Button from "./components/Button";
import CounterButton from "./components/CounterButton";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import { BsFillCalendarFill } from "react-icons/bs";

// function App() {
const App: React.FC = () => {
  let items = ["one", "two", "three", "four"];

  function handleItemClick(item: string): void {
    console.log(item);
    //   throw new Error("Function not implemented.");
  }

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="p-4">
      <BsFillCalendarFill color="red" size="40" />

      <Message />

      {/* <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
       */}
      <Button onClick={() => setAlertVisible(true)}>Click Me</Button>

      <CounterButton />

      <ListGroup
        items={items}
        heading="Numbers"
        onItemClick={handleItemClick}
      />
      {/* <Alert text="Hello World"/> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {/* Hello <span>World</span> */}
          Hello World
        </Alert>
      )}
    </div>
  );
};

export default App;
