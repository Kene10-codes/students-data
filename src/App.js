import { Route, Routes} from "react-router-dom";
import StudentsData from "./pages/studentsData/StudentsData.js";
import ViewResult from "./pages/studentsData/ViewResult.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentsData />} />
        <Route path="/view-result/:id" element={<ViewResult />} />
      </Routes>
    </div>
  );
}

export default App;
