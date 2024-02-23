import TableView from "./TableView";
import "./style.css";
import datalist from "./tabledata.json";

function App() {
  return (
    <div className="">
      <TableView data={datalist} />
    </div>
  );
}

export default App;
