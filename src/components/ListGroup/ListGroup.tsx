// import { MouseEvent } from "react";

import { useState } from "react";
// import "./ListGroup.css";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onItemClick: (item: string) => void;
}

// PascalCasing
const ListGroup: React.FC<Props> = ({ items, heading, onItemClick }) => {
  // function ListGroup({ items, heading, onItemClick}: Props) {

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [name,setName] = useState('');

  // interface - defines a contract for a shape of an object. Helps with type safey of an object

  return (
    <>
      <h1>{heading}</h1>
      {
        // items.length === 0 ? <p>No items found</p> : null //0
        // message //2
        // getMessage() //3
        items.length === 0 && <p>No items found</p> //4
      }
      {/* <ul className="list-group container"> */}
      {/* <ul className={[styles.ListGroup, styles.container].join(" ")}> */}
      <List>
        {items.map((item, index) => (
          // <li
          //   // className="list-group-item active"
          //   className={
          //     selectedIndex === index
          //       ? "list-group-item active"
          //       : "list-group-item"
          //   }
          //   key={item}
          //   // onClick={(event) => console.log(event, item, index)} //5
          //   // onClick={handleClick} //6
          //   onClick={() => {
          //     //7
          //     // alert(index);
          //     // selectedIndex = index; // won't work
          //     setSelectedIndex(index); // works
          //     onItemClick(item);
          //   }}
          // >
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onItemClick(item);
            }}
          >
            {item}
          </ListItem>
          // </li>
        ))}
        {/* // </ul> */}
      </List>
    </>
  );
};

export default ListGroup;
