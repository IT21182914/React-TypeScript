import Alert from "./components/Alert";
import LearnProps from "./components/LearnProps";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <h1>
      {/* <ListGroup />
      <LearnProps
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello <span className="alert alert-info">React</span>
      </Alert>
    </h1>
  );
}
export default App;
