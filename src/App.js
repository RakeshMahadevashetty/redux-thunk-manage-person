import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import PersonOverview from './components/OverView';
import PersonForm from './components/PersonForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
         <Route element={<Navigation/>}>
          <Route path='/' element={<PersonOverview/>} />
          <Route path='overview' element={<PersonOverview/>} />
          <Route path='person' element={<PersonForm/>} />
          <Route path='person/:id' element={<PersonForm/>} />
         </Route>
      </Routes>
    </BrowserRouter></>
}

export default App;
