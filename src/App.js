
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><b>Student Information sheet </b></h1>
      <div className='info_border'>
        <div className='info_questions'>
        <p>Name of Student:</p>
        <div className='name_details'>
        <input type='text' placeholder='firstName'></input>
        <input type='text' placeholder='lastName'></input>
        </div>

        <p>EmployeeID</p>
        <input type='text' placeholder='EmployeeID'></input>
        <p> studentEmail id:</p>
        <input type='text' placeholder='emailId'></input>
      </div>
    </div>
    </div>
  );
}

export default App;
