import LearnProps from "./components/LearnProps";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];
  return (
    <h1>
      <ListGroup />
      <LearnProps items={items} heading="Countries" />
    </h1>
  );
}
export default App;
