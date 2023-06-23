import React from "react";

function Users({ item, clickDeleteBtnHandler }) {
  return (
    <div key={item.id} className="component-style">
      {item.name} - {item.age}
      <button onClick={() => clickDeleteBtnHandler(item.id)}>삭제</button>
    </div>
  );
}

export default Users;
