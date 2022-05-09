import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ db, setDataToEdit, deleteData }) => {
  console.log(db);
  return (
    <>
      <h2 id="users-title">Users:</h2>
      <table className="table">
        <thead>
          <tr className="table-success">
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Street</th>
            <th scope="col">Suite</th>
            <th scope="col">City</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr colSpan="9">
              <td>Sin Datos</td>
            </tr>
          ) : (
            db.map((e) => (
              <CrudTableRow
                key={e.id}
                elem={e}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
