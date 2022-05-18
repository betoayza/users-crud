import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";

const CrudAPI = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null); //sirve para determinar en CrudForm si se trata de un Alta o una Actualizacion
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  //La primer carga la hace en 'db'
  useEffect(() => {    
    let api = helpHttp();
    let uri = "http://localhost:5000/users";
    api.get(uri)
      .then((res) => {
        console.log(res);
        if (!res.error) {
          setDb(res);          
        } else {
          setDb(null);
          setError(res);
          console.log(error);
        }
      })      
      setLoading(false);
  }, []); //solo ejecuta la 1era vez

  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((elem) => (data.id === elem.id ? data : elem));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete id: ${id} ?`); //returns boolean
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>App</h1>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {/*Conditional Render*/}
      {/*Si la variable existe o es verdadera*/}
      {loading && <Loader />}
      {error && <Message />}
      {db && (
        <CrudTable
          db={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </>
  );
};

export default CrudAPI;
