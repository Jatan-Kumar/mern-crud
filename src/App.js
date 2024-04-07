import './App.css';
import {useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "johanson",
      email: "habibi2313",
      age: 34
    }
  ]);

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  useEffect(()=> {
    axios.get('http://localhost:3001/getUsers').then((response => {setUsers(response.data)}))
  }, []);

  const onSubmiting = () => {
    axios.post('http://localhost:3001/createUser',{
      name,
      email,
      age
    })
    .then((response) => {
      alert("User Created");
    });
  }


  return (
    <div className="App">
      <h1>jatan</h1>
      {
        users.map((user) => {
          return (
            <div>
              <div style={{display:"flex", justifyContent: "center" ,margin: "10px"}}>
              <h3 style={{margin:"5px" }}>{user.name}</h3>
              <h3 style={{margin:"5px" }}>{user.email}</h3>
              <h3 style={{margin:"5px" }}>{user.age}</h3>
            </div>
            </div>
          )
        })
      }
      <div>
        <form >
        <label for="name">First name:</label>
          <br/>
          <input type="text" id="name" name="name" onChange={(event) =>{setName(event.target.value)}}/>
          <br />
          <label for="email">email:</label>
          <br/>
          <input type="text" id="email" name="email" onChange={(event) =>{setEmail(event.target.value)}}/>
          <br />
          <label for="age">Age :</label>
          <br/>
          <input type="number" id="age" name="age" onChange={(event) =>{setAge(event.target.value)}}/>
          <button onClick={onSubmiting}>Create </button>
        </form>
      </div>

    </div>
  );
}

export default App;
