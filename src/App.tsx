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
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Forms";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import categories from "./expense-tracker/categories";
import ExpenseForm from "./expense-tracker/ExpenseForm";

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

  const [expenses, setExpenses] = useState([
    { id: 1, description: "a1", amount: 10, category: "Utilities" },
    { id: 2, description: "a2", amount: 10, category: "Utilities" },
    { id: 3, description: "a3", amount: 10, category: "Utilities" },
    { id: 4, description: "a4", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="p-4">
      <div className="md-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>

      <Message />

      <Form></Form>

      <p>
        <ExpandableText maxChars={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          exercitationem ratione! Adipisci velit sapiente odit quia molestiae in
          magni dicta veniam, at dignissimos iste sequi deleniti aliquam tempora
          saepe vero praesentium ut autem corrupti tenetur expedita minima.
          Natus explicabo iusto unde nisi at laboriosam consequatur commodi
          possimus ullam expedita accusamus repellendus animi illum enim,
          eveniet optio nam molestias nesciunt debitis ex voluptatem, quaerat
          tenetur assumenda. Modi vero, inventore alias quos harum eligendi
          necessitatibus error rerum pariatur corrupti sequi, repellendus odit
          labore dignissimos incidunt laborum voluptas cumque vel quasi ducimus
          perferendis. Reiciendis sed, magni tenetur facilis maiores nisi vitae
          maxime fuga.
        </ExpandableText>
      </p>

      <div>
        <Like onClick={handleLikeClick} />
      </div>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>

      {/* <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
       */}
      <Button onClick={() => setAlertVisible(true)}>Click Me</Button>

      {/* <Alert text="Hello World"/> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {/* Hello <span>World</span> */}
          Hello World
        </Alert>
      )}

      <CounterButton />

      <ListGroup
        items={items}
        heading="Numbers"
        onItemClick={handleItemClick}
      />

      <p>
        {game.id} {game.player.name}
      </p>

      <div>
        <BsFillCalendarFill color="red" size="40" />
      </div>
    </div>
  );
};

export default App;
