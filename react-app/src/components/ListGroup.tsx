import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
