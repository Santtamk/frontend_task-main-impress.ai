import React, { useState } from "react";
import "./components.css";
import { Button, Input } from "antd";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ name, email });
    setName("");
    setEmail("");
    console.log("working");
  };

  return (
    <form className="header-box" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <Button type="primary" htmlType="submit">
        {!!editMode ? "Edit user" : "Add user"}
      </Button>
    </form>
  );
};

export default InputHandler;
