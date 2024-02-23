import QualityCheckTable from "./QualityCheckTable";
import qualitycheck from "./qualitycheck.json";
import TableView from "./TableView";
import "./style.css";
import datalist from "./tabledata.json";

function App() {
  return (
    <div className="">
      <TableView data={datalist} />
      <QualityCheckTable data={qualitycheck}/>
    </div>
  );
}

export default App;
