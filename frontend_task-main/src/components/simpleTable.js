import { Button, Modal, Table } from "antd";
import { React } from "react";

const SimpleTable = ({ dataSource, deleteUser }) => {
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
              // onClick={editUser}
              style={{ marginRight: "1rem" }}
            >
              Edit
            </Button>
            <Button type="danger" onClick={Delete}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const Delete = (item) => {
    Modal.confirm({
      title: "Are you sure you want to delete this?",
      onOk: () => {
        deleteUser(item.id);
      },
    });
  };

  return (
    <div>
      {dataSource.length ? (
        <>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
