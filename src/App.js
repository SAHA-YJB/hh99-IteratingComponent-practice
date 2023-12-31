import React from "react";
import "App.css";
import { useState } from "react";
import Users from "components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 34, name: "zxc" },
    { id: 2, age: 25, name: "asd" },
    { id: 3, age: 12, name: "qwe" },
    { id: 4, age: 65, name: "pio" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inNameValue = (event) => {
    setName(event.target.value);
  };
  const inAgeValue = (event) => {
    setAge(event.target.value);
  };
  const clickAddBtnHandler = () => {
    const newUser = { id: users.length +1, age, name}
    setUsers([...users, newUser])
    setName('');
    setAge('');
  }
  const clickDeleteBtnHandler = (id) => {
    const removeUser = users.filter(user => user.id !== id )
    setUsers(removeUser);
  }

  return (
    <div>
      <div>
        이름: <input value={name} onChange={inNameValue} />
        나이: <input value={age} onChange={inAgeValue} />
      </div>
        <button onClick={clickAddBtnHandler}>추가</button>
      <div className="inner">
      {users.map((item) => {
      return <Users key={item.id} item={item} clickDeleteBtnHandler={clickDeleteBtnHandler}/>
    })}
      </div>
    </div>
  );
}

export default App;
