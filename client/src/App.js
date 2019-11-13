import React from 'react';
import './App.css';
// import Jobs from './Jobs';

// const mockJobs = [
//   { title: 'SWE-1', company: 'Google' },
//   { title: 'SWE-1', company: 'Apple' },
//   { title: 'SWE-1', company: 'FaceBook' },

// ]

// function App() {
//   return (
//     <div className="App">
//       <Jobs jobs={mockJobs} />
//     </div>
//   );
// }
class App extends React.Component {

  constructor() {
    super();
    this.name = 'MyComponent';
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
export default App;
