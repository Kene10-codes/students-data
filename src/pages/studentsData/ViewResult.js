import { useContext } from 'react';


function ViewResult() {
 return (
  <div>
      <div className="wrapper">
          <img src="" alt="logo" />
          <div className="school-details">
             <h2>FREMONT COLLEGE OF EDUCATION</h2>
             <p>No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.</p>
           <h3>Post Graduate Diploma in Education</h3>
            <h4>Student First Semester Statement Of Result</h4>
          </div>
          <img src="" alt="picture" />
      </div>

      <div className="student-details">
        <div>
           <p>Name: <span>James Ibire</span></p>
           <p>Level: <span>100 level</span></p>
         </div>

          <div>
           <p>Reg. No: <span>FCE/PGDE/2021/002</span></p>
           <p>Session: <span>2022/2023 Session</span></p>
         </div>
      </div>

     <table  id="table">
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
         <tr>
          <td>1</td>
          <td>PDE 701</td>
          <td>History of Education</td>
          <td>2</td>
          <td>A</td>
          <td>B</td>      
        </tr>  
        <tr>
          <td>2</td>
          <td>PDE 701</td>
          <td>History of Education</td>
          <td>2</td>
          <td>A</td>
          <td>B</td>      
        </tr>  
        <tr>
          <td>3</td>
          <td>PDE 701</td>
          <td>History of Education</td>
          <td>2</td>
          <td>A</td>
          <td>B</td>      
        </tr>  
      </tbody>
      </table>

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
          <td>028</td>
          <td>028</td>
          <td>067</td>
          <td>067</td>
          <td>2.71</td>
          <td>2.71</td>      
        </tr>  
      </tbody>
      </table>
  </div>
 )
}

export default ViewResult;
