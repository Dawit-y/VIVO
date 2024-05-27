import { useState, useEffect } from "react";
import { Table, Collapse, Button } from "antd";
import { useNavigate } from "react-router-dom"; // Step 2
const students = [
  {
    id: 8,
    name: "Mark Johnson",
    department: "Marketing",
    year: 5,
    Bossid: null,
  },
  {
    id: 9,
    name: "Sarah Adams",
    department: "Marketing",
    year: 4,
    Bossid: null,
  },
  {
    id: 6,
    name: "Emma Davis",
    department: "Finance",
    year: 3,
    Bossid: null,
  },
  {
    id: 3,
    name: "David Brown",
    department: "Finance",
    year: 2,
    Bossid: null,
  },
  {
    id: 58,
    name: "Chris White",
    department: "Operations",
    year: 7,
    Bossid: null,
  },
  {
    id: 60,
    name: "Jennifer Garcia",
    department: "Operations",
    year: 6,
    Bossid: null,
  },
  {
    id: 72,
    name: "Sophia Taylor",
    department: "Human Resources",
    year: 4,
    Bossid: null,
  },
  {
    id: 87,
    name: "James Rodriguez",
    department: "Human Resources",
    year: 3,
    Bossid: null,
  },
  {
    id: 96,
    name: "Ryan Martinez",
    department: "Sales",
    year: 8,
    Bossid: null,
  },
  {
    id: 19,
    name: "Lily Wilson",
    department: "Sales",
    year: 5,
    Bossid: null,
  },
  {
    id: 16,
    name: "Ethan Anderson",
    department: "IT",
    year: 6,
    Bossid: null,
  },
  {
    id: 13,
    name: "Grace Thompson",
    department: "IT",
    year: 4,
    Bossid: null,
  },
  {
    id: 14,
    name: "Olivia Hernandez",
    department: "Engineering",
    year: 9,
    Bossid: null,
  },
  {
    id: 109,
    name: "William Moore",
    department: "Engineering",
    year: 5,
    Bossid: null,
  },
  {
    id: 157,
    name: "Noah Thompson",
    department: "Customer Service",
    year: 2,
    Bossid: null,
  },
  {
    id: 168,
    name: "Ava Walker",
    department: "Customer Service",
    year: 1,
    Bossid: null,
  },
  {
    id: 177,
    name: "Liam Garcia",
    department: "Product Management",
    year: 4,
    Bossid: null,
  },
  {
    id: 108,
    name: "Mia Rodriguez",
    department: "Product Management",
    year: 3,
    Bossid: null,
  },
  {
    id: 189,
    name: "Lucas Martinez",
    department: "Research and Development",
    year: 5,
    Bossid: null,
  },
  {
    id: 200,
    name: "Ella Davis",
    department: "Research and Development",
    year: 3,
    Bossid: null,
  },
];

const Supervisor = [
  {
    id: 19,
    name: "John Smith",
    age: 45,
    department: "Marketing",
    teamSize: 20,
    Students: [],
    imgsrc: "",
  },
  {
    id: 72,
    name: "Alice Johnson",
    age: 38,
    department: "Finance",
    teamSize: 15,
    Students: [],
    imgsrc: "",
  },
  {
    id: 973,
    name: "David Lee",
    age: 50,
    department: "Operations",
    teamSize: 30,
    Students: [],
    imgsrc: "",
  },
  {
    id: 64,
    name: "Emily Chen",
    age: 42,
    department: "Human Resources",
    teamSize: 25,
    Students: [],
    imgsrc: "",
  },
  {
    id: 235,
    name: "Michael Brown",
    age: 55,
    department: "Sales",
    teamSize: 35,
    Students: [],
    imgsrc:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  },
  {
    id: 706,
    name: "Jennifer Wang",
    age: 40,
    department: "IT",
    teamSize: 10,
    Students: [],
    imgsrc: "",
  },
  {
    id: 79,
    name: "Robert Garcia",
    age: 48,
    department: "Engineering",
    teamSize: 40,
    Students: [],
    imgsrc: "",
  },
  {
    id: 86,
    name: "Samantha White",
    age: 36,
    department: "Customer Service",
    teamSize: 25,
    Students: [],
    imgsrc: "",
  },
  {
    id: 79,
    name: "Daniel Kim",
    age: 43,
    department: "Product Management",
    teamSize: 20,
    Students: [],
    imgsrc: "",
  },
  {
    id: 610,
    name: "Jessica Martinez",
    age: 47,
    department: "Research and Development",
    teamSize: 30,
    Students: [],
    imgsrc:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  },
];
// other boss data...

export default function AssignSupervisor() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedStudentsByBoss, setSelectedStudentsByBoss] = useState({});
  const navigate = useNavigate();

  const [Students, setStudents] = useState(students);
  useEffect(() => {}, [selectedStudentsByBoss]);
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  console.log(selectedStudentsByBoss);

  const handleRowClick = (record) => {
    const index = selectedRows.findIndex((row) => row.id === record.id);

    if (index === -1) {
      setSelectedRows([...selectedRows, record]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row.id !== record.id));
    }
  };
  const HandleClick = () => {
    navigate("/UvCoordinator/AssignSupervisor/Editassignament", {
      state: { Supervisor: Supervisor, students: students },
    });
  };
  const handleButtonClick = (boss) => {
    // Get the IDs of selected students
    const selectedStudentIDs = selectedRows.map((student) => student.id);

    // Filter out the selected students from the Students array
    const remainingStudents = Students.filter(
      (student) => !selectedStudentIDs.includes(student.id)
    );

    // Update the selected students for the boss
    setSelectedStudentsByBoss({
      ...selectedStudentsByBoss,
      [boss.id]: selectedRows,
    });

    // Update the Students state with the remaining students
    setStudents(remainingStudents);

    // Clear the selected rows
    setSelectedRows([]);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 180,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Department",
      dataIndex: "department",
      width: 180,
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Years",
      dataIndex: "year",
      width: 180,
      sorter: (a, b) => a.year - b.year,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Select",
      dataIndex: "selected",
      width: 100,
      render: (_, record) => (
        <input
          type="checkbox"
          checked={selectedRows.some((row) => row.id === record.id)}
          onChange={() => handleRowClick(record)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container px-5 py-24 w-3/4 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Assign Supervisor with respective Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <div className="container px-1 py-24 mx-auto">
          {Supervisor.map((boss) => {
            const updatedStudents = Students.map((worker) => {
              return {
                ...worker,
                Bossid: boss.id,
              };
            });

            return (
              <Collapse
                key={boss.id}
                defaultActiveKey={["selected", "unselected"]}
                ghost
                items={boss}
                className=" "
              >
                <Collapse.Panel
                  header={
                    <div className="m-0 flex bg-gray-100 items-center justify-evenly gap-x-3 py-3 px-6 whitespace-nowrap ">
                      <img
                        src={boss.imgsrc}
                        alt="Boss"
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="block text-gray-700 text-sm font-medium">
                        {boss.name}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {boss.department}
                      </span>
                    </div>
                  }
                  key={boss.name}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    {console.log(typeof selectedStudentsByBoss[boss.id])}

                    <div
                      style={{
                        display: selectedStudentsByBoss[boss.id]
                          ? "none"
                          : "block",
                      }}
                    >
                      <div>
                        <Table
                          className="mx-3"
                          columns={columns}
                          dataSource={updatedStudents}
                          pagination={false}
                          onChange={handleChange}
                          sortDirections={["ascend", "descend"]}
                          onRow={(record) => ({
                            onClick: () => {
                              handleRowClick(record, boss);
                            },
                            style: {
                              backgroundColor: selectedRows.find(
                                (row) => row.id === record.id
                              )
                                ? "#f0f0f0"
                                : "inherit",
                            },
                          })}
                        />
                      </div>
                      <div style={{ textAlign: "right", marginTop: "10px" }}>
                        <Button onClick={() => handleButtonClick(boss)}>
                          Done
                        </Button>
                      </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h3>Selected Students:</h3>

                      <Table
                        columns={columns.slice(0, -1)} // Exclude the first column (checkbox column)
                        dataSource={selectedStudentsByBoss[boss.id]}
                        pagination={false}
                        onChange={handleChange}
                        sortDirections={["ascend", "descend"]}
                        onRow={(record) => ({
                          onClick: () => {
                            handleRowClick(record, boss);
                          },
                        })}
                      />
                    </div>
                  </div>
                </Collapse.Panel>
              </Collapse>
            );
          })}
          <div className="mt-9">
            <Button
              type="primary"
              className="float-right mr-20"
              onClick={() => HandleClick()}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
