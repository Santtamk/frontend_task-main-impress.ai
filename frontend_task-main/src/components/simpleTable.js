import { Table } from "antd";
import { React } from "react";
import { DeleteOutlined } from "@ant-design/icons";

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
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => Delete(record)}
            />
          </>
        );
      },
    },
  ];

  const Delete = (record) => {
    setData((pre) => {
      return pre.filter((person) => person.id !== record.id);
    });
  };

  return (
    <div>
      {dataSource.length ? (
        <>
          {/* {dataSource.map((item, index) => {
            return (
              <div key={index}>
                <div>Id: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Email: {item.email}</div>
              </div>
            );
          })} */}
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
