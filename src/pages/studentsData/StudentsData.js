import { useState, useEffect } from "react";
import { Header } from "../../components/header/Header.js";
import { SelectInput, SelectInputLevel, SelectInputStates, SelectInputGenders } from "../../components/inputs/Inputs.js";
import {
  SearchButton,
  DownloadButton,
} from "../../components/button/Button.js";
import { getAges, getLevel, getStates, getGenders, getStudentsData } from "../../services/index.js";

function FilterStudents() {

  const [ages, setAges] = useState([]);
  const [levels, setLevels] = useState([]);
  const [states, setStates] = useState([]);
  const [genders, setGenders] = useState([]);
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [search, setSearch] = useState("");

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

    getStudentsData().then((studentsData) => {
      if(mounted) {
        console.log(studentsData);
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

       <StudentInfo />
    </div>
  );
}

function StudentInfo() {
  
  // Set the states
  const [studentsData, setStudentsData] = useState([]);

  // Perform requests on the server
  useEffect(() => {
    let mounted = true;
    getStudentsData().then((studentsData) => {
      if(mounted) {
        setStudentsData(studentsData.data.students);
      }
    })

    // clean up after mounted
    return () => (mounted = false);
  }, []);

  // converts first letter to uppercase func
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // Add zero func
  function addZero(num) {
    if(num < 10) {
       return "0" + num;
    } else {
      return num;
    }
  }
  
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
        
       {(studentsData?.map(student => (
         <tr key={student.id}>
               <td>{addZero(student.id)}</td>
               <td>{capitalizeFirstLetter(student.surname)}</td>
               <td>{student.firstname}</td>
               <td>{student.age}</td>
               <td>{capitalizeFirstLetter(student.gender)}</td>
               <td>{student.level}</td>
               <td>{student.state}</td>
               <td><DownloadButton text="Download Result" className="download" /></td>
        </tr>
        )))}
      </tbody>
    </table>
  );
}

function StudentsData() {
  return (
    <>
      <Header text="Student Data Table" />
      <FilterStudents />
    </>
  );
}

export default StudentsData;
