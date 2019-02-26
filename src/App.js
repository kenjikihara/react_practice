import React, {  } from 'react';

// class App extends Component {
//   render() {
//
//
//     return (
//       <div>
//         Hello!!!
//       </div>
//     )
//
//
//   }
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )

}
const Cat = () => {
  return <div>Meow!</div>
}

export default App;
