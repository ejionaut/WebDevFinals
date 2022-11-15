import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/index';
import TeacherPage from './pages/teacherModule';
import StudentPage from './pages/studentModule';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/studentPage' element={<StudentPage />} />
          <Route path='/teacherPage' element={<TeacherPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
