import './App.css';
import teacherPage from './pages/teacherModule';
import studentPage from './pages/studentModule';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/pages/studentModule' element={<studentPage/>} />
          <Route path='/pages/teacherModule' element={<teacherPage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
