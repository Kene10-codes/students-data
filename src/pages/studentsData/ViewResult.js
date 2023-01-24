import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Result = React.forwardRef((props, ref) => {
  const [studentResult, setStudentResult] = useState({});
  const { id } = useParams();

  function downloadResult() {
    fetch(`https://test.omniswift.com.ng/api/viewResult/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudentResult(data);
      });
  }
  useEffect(() => {
    downloadResult();
  }, [id]);

  return (
    <div ref={ref} className="result">
      <div className="wrapper">
        <img src={studentResult.logo} alt="logo" />
        <div className="school-details">
          <h2>FREMONT COLLEGE OF EDUCATION</h2>
          <p>No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.</p>
          <h3>Post Graduate Diploma in Education</h3>
          <h4>Student First Semester Statement Of Result</h4>
        </div>
        <img src={studentResult.profile_picture} alt="pic" />
      </div>

      <div className="student-details">
        <div>
          <p>
            Name:{" "}
            <span>
              {studentResult.data?.surname} {studentResult.data?.firstname}
            </span>
          </p>
          <p>
            Level: <span>{studentResult.data?.level} </span>
          </p>
        </div>

        <div>
          <p>
            Reg. No: <span>{studentResult.data?.reg_no}</span>
          </p>
          <p>
            Session: <span>{studentResult.data?.session}</span>
          </p>
        </div>
      </div>

      <div className="table-container-two">
        <table id="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Unit</th>
              <th>Grade</th>
              <th>Total Point</th>
            </tr>
          </thead>
          <tbody>
            {studentResult.data?.result?.map((res, i) => (
              <tr key={res.title}>
                <td>{++i}</td>
                <td>{res.coursecode}</td>
                <td>{res.title}</td>
                <td>2</td>
                <td>A</td>
                <td>B</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container-two">
        <table id="table-two">
          <thead>
            <tr>
              <th>UNTS</th>
              <th>UNTD</th>
              <th>GPTS</th>
              <th>GPTD</th>
              <th>GPATS</th>
              <th>GPATD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{studentResult.data?.cummulative?.unts}</td>
              <td>{studentResult.data?.cummulative?.untd}</td>
              <td>{studentResult.data?.cummulative?.gpts}</td>
              <td>{studentResult.data?.cummulative?.gptd}</td>
              <td>{studentResult.data?.cummulative?.gpats}</td>
              <td>{studentResult.data?.cummulative?.gpatd}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="remarks-wrapper">
        <p>
          Remarks:{" "}
          <span className="remarks">
            {studentResult.data?.cummulative?.remarks}
          </span>
        </p>
      </div>
      <footer>
        <hr />
        <p>Registrar</p>
      </footer>
    </div>
  );
});

function ViewResult() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Result ref={componentRef} />
      <div className="print">
        <button onClick={handlePrint}>Print Result</button>
      </div>
    </div>
  );
}

export default ViewResult;
