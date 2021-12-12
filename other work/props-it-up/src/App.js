import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <Person
    firstName={"John"}
    lastName={"Doe"}
    age={26}
    hairColor={"Brown"} 
     />
    <Person
    firstName={"Bill"}
    lastName={"Ford"}
    age={56}
    hairColor={"Red"} 
     />
    <Person
    firstName={"Michael"}
    lastName={"WebDev"}
    age={26}
    hairColor={"Blonde"} 
     />
    </div>
  );
}

export default App;
