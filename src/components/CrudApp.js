import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Elvis",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: "Robel-Corkery",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    street: "Skiles Walks",
    suite: "Suite 351",
    city: "Roscoeview",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "Keebler LLC",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialData);
  const [dataToEdit, setDataToEdit] = useState(null); //sirve para determinar en CrudForm si se trata de un Alta o una Actualizacion
  console.log(db);

  const createData = (data) => {
    console.log(data);
    data.id=Date.now();
    console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData=db.map(elem=>data.id===elem.id ? data : elem );
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete=window.confirm(`Are you sure to delete id: ${id} ?`); //returns boolean
  if(isDelete){
    let newData=db.filter(el=>el.id!==id);
    setDb(newData);
  }else{
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
      <CrudTable
        db={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CrudApp;
