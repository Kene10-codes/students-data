import { useState, useEffect } from "react"
import { Header } from "../../components/header/Header.js"
import { SelectInput } from "../../components/inputs/Inputs.js"
import { SearchButton, DownloadButton } from "../../components/button/Button.js"
import { getAges } from "../../services/index.js"


function FilterStudents() {
const [ages, setAges] = useState([]);


useEffect(() => {
  let mounted = true;
  getAges().then(ages => {
    if(mounted) {
     console.log(ages);
    }
  })
  // clean up after mounted
  return () => mounted = false;
}, [])

  return (
    <div className="filter-container">
         <h2>Filter Student Table By:</h2>
        <div className="form-container">
             <SelectInput ages={ages} placeholder="select age" text="Age" className="select-age" />
             <SelectInput placeholder="select state" text="state" className="select-state"  />
             <SelectInput placeholder="select level" text="level" className="select-level" />
             <SelectInput placeholder="select gender" text="gender" className="select-gender"  />
             <SearchButton text="Search" className="search"  />
        </div>
     </div>
  )
}

function StudentInfo() {
  return (
 
      <table>
       <thead>
         <tr>
            <th>S/N</th>
            <th>Surname</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Level</th>
            <th>State</th>
            <th>Action</th>
        </tr>
       </thead>
       <tbody>
       <tr>
          <td>01</td>
          <td>Chukwuma</td>
          <td>James</td>
          <td>24</td>
          <td>Male</td>
          <td>100 level</td>
          <td>Ebonyi State</td>
          <td><DownloadButton text="Download Result" className="download"  /></td>
        </tr>
         <tr>
          <td>02</td>
          <td>Animashaun</td>
          <td>Deborah</td>
          <td>24</td>
          <td>Female</td>
          <td>100 level</td>
          <td>Ondo State</td>
          <td><DownloadButton text="Download Result" className="download"  /></td>
        </tr>
      
      </tbody>
      </table>
  )
}


function StudentsData() {
  return (
    <>
        <Header text="Student Data Table" />
        <FilterStudents />
        <StudentInfo />
    </>
  )
}

export default StudentsData