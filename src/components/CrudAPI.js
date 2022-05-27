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

  let apiHelper = helpHttp();
  let uriDb = "http://localhost:5000/users";

  //La primer carga la hace en 'db'
  useEffect(() => {
    apiHelper.get(uriDb).then((res) => {
      console.log(res);
      if (!res.error) {
        setDb(res);
      } else {
        setDb(null);
        setError(res);
        console.log(error);
      }
    });
    setLoading(false);
  }, []); //solo ejecuta la 1era vez

  const createData = (data) => {
    //recibe los datos del form
    console.log(data);
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    apiHelper
      .post(uriDb, options)
      .then((res) => {
        console.log(error);
        if (!res.error) {
          setDb({ ...db, res });
        } else {
          setError(res);
        }
      })
      .catch((error) => error);
  };

  const updateData = (data) => {
    let endpoint = `${uriDb}/${data.id}`;
    console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    apiHelper
      .put(endpoint, options)
      .then((res) => {
        if (!res.error) {
          //si hay coincidencia de ID devuelve la bds actualizada
          //si no, devuelve tal cual
          let newData = db.map((elem) => (data.id === elem.id ? data : elem));
          setDb(newData);
        } else {
          setError(res);
        }
      })
      .catch((error) => error);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete id: ${id} ?`); //returns boolean
    
    
    if (isDelete) {
      let endpoint = `${uriDb}/${id}`;

      let options={
        headers: {"content-type": "application/json"}
      };
      
      apiHelper
      .del(endpoint, options)
      .then((res) => {
        if (!res.error) {
          //filtra el id coincidente
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);          
        } else {
          setError(res);
        }
      })
      .catch((error) => error);
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
