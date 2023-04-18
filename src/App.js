import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
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
//           Learn React:Components and Props
//         </a>
//       </header>
//     </div>)
// }
     function App(){
      return (
       <form>
       <div className = "Name">
       <label>Enter your name:
             <input type="text" />
           </label>
           <label>Enter your Email:
             <input type="email" />
           </label>
       </div>
      </form>
     )}; 
      const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<logIn/>);
    
    

export default App;


 
