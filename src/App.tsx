import React, { useState } from "react";
import Button from "./components/Button";
import CounterButton from "./components/CounterButton";
import Message from "./components/Message";
// import ListGroup from "./components/ListGroup/ListGroup";
import ListGroup from "./components/ListGroup"; // referring to a folder, compiler will look for index.ts file within the folder
import Alert from "./components/Alert";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import "./App.css";

// function App() {
const App: React.FC = () => {
  let items = ["one", "two", "three", "four"];

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Vijay",
    },
  });

  const [pizza, setPizza] = useState({
    name: "spicy pizza",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "p1", quantity: 1 },
      { id: 2, title: "p2", quantity: 1 },
    ],
  });

  function handleItemClick(item: string): void {
    console.log(item);
    //   throw new Error("Function not implemented.");
  }

  const [alertVisible, setAlertVisible] = useState(false);

  function handleLikeClick(): void {
    console.log("clicked");

    setGame({ ...game, player: { ...game.player, name: "kumar" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  }

  return (
    <div className="p-4">
      <p>
        {game.id} {game.player.name}
      </p>

      <p>
        {cart.discount}
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity}
            </li>
          ))}
        </ul>
      </p>

      <Like onClick={handleLikeClick} />

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
