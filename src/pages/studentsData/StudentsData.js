import { useState, useEffect } from "react";
import { Header } from "../../components/header/Header.js";
import { SelectInput, SelectInputLevel, SelectInputStates, SelectInputGenders } from "../../components/inputs/Inputs.js";
import {
  SearchButton,
  DownloadButton,
} from "../../components/button/Button.js";
import { getAges, getLevel, getStates, getGenders } from "../../services/index.js";

function FilterStudents() {
  const [ages, setAges] = useState([]);
  const [levels, setLevels] = useState([]);
  const [states, setStates] = useState([]);
  const [genders, setGenders] = useState([]);
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  // Perform requests on the server
  useEffect(() => {
    let mounted = true;
    getAges().then((ages) => {
      if (mounted) {
        setAges(ages.data);
      }
    });

    // Get levels API request
    getLevel().then((levels) => {
      if(mounted) {
        setLevels(levels.data);
      }
    })

    // Get states API request
    getStates().then((states) => {
      if(mounted) {
        setStates(states.data);
      }
    })

    // Get genders API request
    getGenders().then((gender) => {
      if(mounted) {
        setGenders(gender.data);
      }
    })
    // clean up after mounted
    return () => (mounted = false);
  }, []);


  // Handle Change func
  const handleChange = (e) => {
    setAge(e.target.value);
    setState(e.target.value);
    setLevel(e.target.value);
    setState(e.target.value);
  }

  return (
    <div className="filter-container">
      <h2>Filter Student Table By:</h2>
      <div className="form-container">
        <form>
          <SelectInput
            options={ages}
            name="ages"
            placeholder="select age"
            text="Age"
            className="select-age"
           handleChange={handleChange}
          />
          <SelectInputStates
             options={states}
            placeholder="select state"
            text="state"
            className="select-state"
            handleChange={handleChange}
          />
          <SelectInputLevel
            options={levels}
            placeholder="select level"
            text="level"
            className="select-level"
            handleChange={handleChange}
          />
          <SelectInputGenders
            options={genders}
            placeholder="select gender"
            text="gender"
            className="select-gender"
            handleChange={handleChange}
          />
          <SearchButton text="Search" className="search" />
        </form>
      </div>
    </div>
  );
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
          <td>
            <DownloadButton text="Download Result" className="download" />
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td>Animashaun</td>
          <td>Deborah</td>
          <td>24</td>
          <td>Female</td>
          <td>100 level</td>
          <td>Ondo State</td>
          <td>
            <DownloadButton text="Download Result" className="download" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function StudentsData() {
  return (
    <>
      <Header text="Student Data Table" />
      <FilterStudents />
      <StudentInfo />
    </>
  );
}

export default StudentsData;
