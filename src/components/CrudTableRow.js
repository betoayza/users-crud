import React from 'react'

const CrudTableRow = ({elem}) => {
  return (
    <>
       <tr>
           <td>{elem.name}</td>
           <td>{elem.username}</td>
           <td>{elem.email}</td>
           <td>{elem.street}</td>
           <td>{elem.suite}</td>
           <td>{elem.city}</td>
           <td>{elem.phone}</td>
           <td>{elem.website}</td>
           <td>{elem.company}</td>
           <td><button>Editar</button><button>Modificar</button></td>
       </tr>

    </>
  )
}

export default CrudTableRow