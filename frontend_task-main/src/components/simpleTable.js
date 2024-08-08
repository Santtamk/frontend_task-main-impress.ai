import { Button, Input, Modal, Table } from "antd";
import { React, useState } from "react";

const SimpleTable = ({ dataSource, deleteUser, editUser }) => {
  const [visible, setVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "action",
      title: "Actions",
      render: (item) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => onEdit(item)}
              style={{ marginRight: "1rem" }}
            >
              Edit
            </Button>
            <Button type="danger" onClick={() => onDelete(item)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const onDelete = (item) => {
    Modal.confirm({
      title: "Are you sure you want to delete this?",
      onOk: () => {
        deleteUser(item.id);
        console.log("working");
      },
    });
  };

  const onEdit = (item) => {
    setEditingUser(item);
    setName(item.name);
    setEmail(item.email);
    setVisible(true);
  };

  const handleOk = () => {
    if (name && email) {
      editUser(editingUser.id, { name, email });
      setVisible(false);
    } else {
      Modal.error({
        title: "Error",
        content: "Name and email are required",
      });
    }
  };

  return (
    <div>
      {dataSource.length ? (
        <>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <Modal
            title="Edit Details"
            visible={visible}
            style={{ display: "flex", flexDirection: "row" }}
            onCancel={() => setVisible(false)}
            onOk={handleOk}
            okText="Save"
          >
            <Input
              value={name}
              type="text"
              placeholder="Edit name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <Input
              value={email}
              type="email"
              placeholder="Edit email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </Modal>
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
