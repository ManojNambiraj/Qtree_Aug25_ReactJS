import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserManagement() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
      getData()
    }, []);

    const getData = async () => {
        const studentsDatas = await axios.get(`https://68c97466ceef5a150f64f507.mockapi.io/students`);

        setUserData(studentsDatas.data);
    }

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-4">
        Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;


// HTTP methods  --> POST      GET       PUT     DELETE
//   CRUD            Create    Read      Update  Delete
