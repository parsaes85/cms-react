import React, { useEffect, useState } from "react";

import DataTable from "../../components/DataTable/DataTable";
import TableUserRow from "../../components/TableUserRow/TableUserRow";
import AddNewUserForm from "../../components/AddNewUserForm/AddNewUserForm";
import UserContext from "../../contexts/userContext";

export default function Users() {
  const mainUrl = "http://localhost:8000/api";

  const [flag, setFlag] = useState(false);
  const [users, setUsers] = useState([]);
  const [mainUserInfo, setMainUserInfo] = useState({});

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch(`${mainUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
      <UserContext.Provider
        value={{
          getAllUsers,
          mainUserInfo,
          setMainUserInfo,
        }}
      >
        <AddNewUserForm />

        <div className="w-[700px] lg:w-full">
          <DataTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <TableUserRow
                  {...user}
                  key={user.id}
                  flag={flag}
                  setFlag={setFlag}
                />
              ))}
            </tbody>
          </DataTable>
        </div>
      </UserContext.Provider>
  );
}
