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
              <button className="btn btn-primary" onClick={()=>setDataToEdit(elem)}>Edit</button>
              <button className="btn btn-secondary" onClick={()=>deleteData(id)}>Delete</button>
           </td>
       </tr>

    </>
  )
}

export default CrudTableRow;