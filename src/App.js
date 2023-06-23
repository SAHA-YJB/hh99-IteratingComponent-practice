import React from "react";
import "App.css";

function App() {
  const users = [
    { id: 1, age: 34, name: "zxc" },
    { id: 2, age: 25, name: "asd" },
    { id: 3, age: 12, name: "qwe" },
    { id: 4, age: 65, name: "pio" },
  ];
  return (
    <div className="inner">
      {
      users.map((user) => {
        return (
          <div key={user.id} className="component-style">
            {user.name} - {user.age}
          </div>
        );
      })
      }
      {/* <div className="component-style">
        {users[0].name} - {users[0].age}
      </div> */}
    </div>
  );
}

export default App;
