import { Button, Table } from "antd";
import { React } from "react";

const SimpleTable = ({ dataSource }) => {
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
      render: (record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => Delete(record)}
              style={{ marginRight: "1rem" }}
            >
              Edit
            </Button>
            <Button type="danger" onClick={() => Delete(record)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const Delete = (record) => {
    // setData((pre) => {
    //   return pre.filter((person) => person.id !== record.id);
    // });
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
