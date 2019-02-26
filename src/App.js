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
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" }
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )

}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} yeas old</div>
}
User.defaultProps = {
  age: 1
}

export default App;
