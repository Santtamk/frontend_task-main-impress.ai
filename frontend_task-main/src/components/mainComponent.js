import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import "./components.css";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} />
      <SimpleTable
        dataSource={userState.users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
}

export default MainComponent;
