import QualityCheckTable from "./QualityCheckTable";
import qualitycheck from "./qualitycheck.json";
import TableView from "./TableView";
import "./style.css";
import datalist from "./tabledata.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<TableView data={datalist} />} />
          <Route
            path="/quality-check"
            element={<QualityCheckTable data={qualitycheck} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
