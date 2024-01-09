import { useState } from "react";

function ListGroup() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>List</h1>
      {/* true && 1 = 1 */} {/* false && 1 = false */}
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
