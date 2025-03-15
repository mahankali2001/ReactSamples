// PascalCasing
function ListGroup() {
  // const items = ["one", "two", "three", "four"];
  let items = ["one", "two", "three", "four"];
  items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>My List</h1>
  //       <p>No items found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No items found</p> : null;
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  return (
    <>
      <h1>My List</h1>
      {
        // items.length === 0 ? <p>No items found</p> : null
        // message
        // getMessage()
        items.length === 0 && <p>No items found</p>
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
