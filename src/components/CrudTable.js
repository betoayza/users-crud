import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ db, setDataToEdit, deleteData }) => {
  console.log(db);
  return (
    <>
      <div id="table-div">
      <h2 id="users-title">Users:</h2>
        <table className="table  table-striped table-bordered table-sm">
          <thead>
            <tr className="table-success" id="tr-table-header">
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
            {!db.length ? (
              <tr colSpan="10">
                <td id="td-sin-datos">Sin Datos</td>
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
      </div>
    </>
  );
};

export default CrudTable;
