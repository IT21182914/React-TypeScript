function ListGroup() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];

  items = [];

  return (
    <div>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
