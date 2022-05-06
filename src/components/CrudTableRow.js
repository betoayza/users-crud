import React from 'react'

const CrudTableRow = ({elem, setDataToEdit, deleteData}) => {
  let {id, name, username, email, street, suite, city, phone, website, company}=elem;

  return (
    <>
       <tr>
           <td>{name}</td>
           <td>{username}</td>
           <td>{email}</td>
           <td>{street}</td>
           <td>{suite}</td>
           <td>{city}</td>
           <td>{phone}</td>
           <td>{website}</td>
           <td>{company}</td>
           <td>
              <button onClick={()=>setDataToEdit(elem)}>Editar</button>
              <button onClick={()=>deleteData(id)}>Eliminar</button>
           </td>
       </tr>

    </>
  )
}

export default CrudTableRow