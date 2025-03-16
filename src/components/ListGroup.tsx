// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

// PascalCasing
function ListGroup(props: Props) {
  // const items = ["one", "two", "three", "four"];
  // let items = ["one", "two", "three", "four"];
  // items = []; //1

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>My List</h1>
  //       <p>No items found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No items found</p> : null; //2
  // const getMessage = () => { //3
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };
  // let selectedIndex = 0; //4
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  //hook - fn allows us to tap into built functions in REACt
  // const arr = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name,setName] = useState('');

  // interface - defines a contract for a shape of an object. Helps with type safey of an object

  return (
    <>
      <h1>{props.heading}</h1>
      {
        // items.length === 0 ? <p>No items found</p> : null //0
        // message //2
        // getMessage() //3
        props.items.length === 0 && <p>No items found</p> //4
      }
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            // className="list-group-item active"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(event, item, index)} //5
            // onClick={handleClick} //6
            onClick={() => {
              //7
              // alert(index);
              // selectedIndex = index; // won't work
              setSelectedIndex(index); // works
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
