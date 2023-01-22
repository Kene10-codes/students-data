import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StudentsData from "./pages/studentsData/StudentsData.js";
import ViewResult  from "./pages/studentsData/ViewResult.js";

// import StudentContext from "./components/context/StudentContext.js";

function App() {
 
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<StudentsData />} />
         <Route path="/view-result" element={<ViewResult />} />
      </Routes>
    </div>
  );
}

export default App;
