import './App.css';
import { CssBaseline } from "@mui/material";
import {Routes, Route } from "react-router-dom";
import Movies from './components/Movies/Movies';
import MovieInformation from './components/MovieInformation/MovieInformation';
import Actor from './components/Actor/Actor';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Movies/>} />
          <Route path='/movie/:id' element={<MovieInformation/>} />
          <Route path='/actors/:id' element={<Actor/>} />
          <Route path='/profile/:id' element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
