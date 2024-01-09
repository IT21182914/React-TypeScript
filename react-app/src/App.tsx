import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LearnProps from "./components/LearnProps";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "India", "USA", "Canada"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <h1>
      {/* <ListGroup />
      <LearnProps
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span className="alert alert-info">React</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </h1>
  );
}
export default App;
