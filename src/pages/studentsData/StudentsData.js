import { useState, useEffect } from "react";
import { Header } from "../../components/header/Header.js";
import {
  SelectInput,
  SelectInputLevel,
  SelectInputStates,
  SelectInputGenders,
} from "../../components/inputs/Inputs.js";
import {
  SearchButton,
  DownloadButton,
} from "../../components/button/Button.js";
import {
  getAges,
  getLevel,
  getStates,
  getGenders,
  getStudentsData,
} from "../../services/index.js";
import { POST_FILTER_DATA_URL } from "../../constants/API";

function FilterStudents() {
  // Set states
  const [ages, setAges] = useState([]);
  const [levels, setLevels] = useState([]);
  const [states, setStates] = useState([]);
  const [genders, setGenders] = useState([]);
  const [filterData, setFilteredData] = useState([]);
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
      if (mounted) {
        setLevels(levels.data);
      }
    });

    // Get states API request
    getStates().then((states) => {
      if (mounted) {
        setStates(states.data);
      }
    });

    // Get genders API request
    getGenders().then((gender) => {
      if (mounted) {
        setGenders(gender.data);
      }
    });

    // clean up after mounted
    return () => (mounted = false);
  }, []);

  // Handle form and search submit
  function handleSubmit(e) {
    e.preventDefault();

    fetch(POST_FILTER_DATA_URL, {
      method: "POST",
      body: JSON.stringify({ age, state, level, gender }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilteredData(data.data.students);
      });
  }

  return (
    <div className="filter-container">
      <h2>Filter Student Table By:</h2>
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <SelectInput
            options={ages}
            name="ages"
            placeholder="select age"
            text="Age"
            className="select-age"
            onChange={(e) => setAge(e.target.value)}
          />
          <SelectInputStates
            options={states}
            placeholder="select state"
            text="state"
            className="select-state"
            onChange={(e) => setState(e.target.value)}
          />
          <SelectInputLevel
            options={levels}
            placeholder="select level"
            text="level"
            className="select-level"
            onChange={(e) => setLevel(e.target.value)}
          />
          <SelectInputGenders
            options={genders}
            placeholder="select gender"
            text="gender"
            className="select-gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <SearchButton type="submit" text="Search" className="search" />
        </form>
      </div>
      <StudentInfo filterData={filterData} />
    </div>
  );
}

function StudentInfo({ filterData }) {
  // Set the states
  const [studentsData, setStudentsData] = useState([]);
  const [resultData, setResultData] = useState([]);

  // Perform requests on the server
  useEffect(() => {
    let mounted = true;
    getStudentsData().then((studentsData) => {
      if (mounted) {
        setStudentsData(studentsData?.data.students);
      }
    });

    // clean up after mounted
    return () => (mounted = false);
  }, []);

  // converts first letter to uppercase func
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Add zero func
  function addZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function downloadResult(id) {
    fetch(`https://test.omniswift.com.ng/api/viewResult/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setResultData(data.data);
      });

    // const file = new Blob(result, {type: 'text/plain'});

    // const elem = document.createElement("a");
    // elem.href= URL.createObjectURL(file);
    // elem.download = "100ideas-" + Date.now() + ".txt";

    // document.body.appendChild(elem);
    // elem.click();
  }

  return (
    <table className="table">
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
        {filterData.length <= 0
          ? studentsData?.map((student) => (
              <tr key={student.id}>
                <td>{addZero(student.id)}</td>
                <td>{capitalizeFirstLetter(student.surname)}</td>
                <td>{capitalizeFirstLetter(student.firstname)}</td>
                <td>{student.age}</td>
                <td>{capitalizeFirstLetter(student.gender)}</td>
                <td>{student.level}</td>
                <td>{capitalizeFirstLetter(student.state)}</td>
                <td>
                  <DownloadButton
                    onClick={() => downloadResult(student.id)}
                    text="Download Result"
                    className="download"
                  />
                </td>
              </tr>
            ))
          : filterData?.map((student) => (
              <tr key={student.id}>
                <td>{addZero(student.id)}</td>
                <td>{capitalizeFirstLetter(student.surname)}</td>
                <td>{capitalizeFirstLetter(student.firstname)}</td>
                <td>{student.age}</td>
                <td>{capitalizeFirstLetter(student.gender)}</td>
                <td>{student.level}</td>
                <td>{capitalizeFirstLetter(student.state)}</td>
                <td>
                  <DownloadButton
                    onClick={() => downloadResult(student.id)}
                    text="Download Result"
                    className="download"
                  />
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

// Students Data Componenet
function StudentsData() {
  return (
    <>
      <Header text="Student Data Table" />
      <FilterStudents />
    </>
  );
}

export default StudentsData;
