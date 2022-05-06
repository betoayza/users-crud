import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ db, setDataToEdit, deleteData }) => {
  console.log(db);
  return (
    <>
      <h2>CrudTable</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr colSpan="9">
              <td>Sin Datos</td>
            </tr>
          ) : (
            db.map((e) => <CrudTableRow key={e.id} elem={e} setDataToEdit={setDataToEdit} deleteData={deleteData} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
