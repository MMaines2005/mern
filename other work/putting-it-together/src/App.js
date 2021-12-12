import PersonBirthday from './components/PersonBirthday';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonBirthday firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonBirthday firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonBirthday firstName={"Bee"} lastName={"Mad"} age={23} hairColor={"Red"} />
      <PersonBirthday firstName={"Mac"} lastName={"AnCheese"} age={54} hairColor={"Yellow"} />
    </div>
  );
}

export default App;
