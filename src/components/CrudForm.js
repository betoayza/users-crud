import React, { useState, useEffect } from "react";

const initialForm = {
  id: "",
  name: "",
  username: "",
  email: "",
  street: "",
  suite: "",
  city: "",
  phone: "",
  website: "",
  company: "",
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit)
    } 
    else{  
      setForm(initialForm);
    }
  }, [dataToEdit])
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {      
      if(form.id===""){//Si el id es null, se trata de un alta
        createData(form);
        console.log(form);
      }else{ //caso contrario, se trata de una actualización
        updateData(form);
      }
    } catch (error) {
      alert("Datos incompletos");
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null); //lo lleva al valor inicial
  };

  return (
    <>
      <h2>{dataToEdit ? "Edit user" : "Add user"}</h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="md-3">
            <input
              className="form-control"
              type="hidden"
              name="id"              
              value={form.id}
              required
            />

            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name..."
              onChange={handleChange}
              value={form.name}
              required
            />
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username..."
              onChange={handleChange}
              value={form.username}
              required
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email..."
              onChange={handleChange}
              value={form.email}
              required
            />
            <input
              className="form-control"
              type="text"
              name="street"
              placeholder="Street..."
              onChange={handleChange}
              value={form.street}
              required
            />
            <input
              className="form-control"
              type="text"
              name="suite"
              placeholder="Suite..."
              onChange={handleChange}
              value={form.suite}
              required
            />
            <input
              className="form-control"
              type="text"
              name="city"
              placeholder="City..."
              onChange={handleChange}
              value={form.city}
              required
            />
            <input
              className="form-control"
              type="tel"
              name="phone"
              placeholder="Phone..."
              onChange={handleChange}
              value={form.phone}
              required
            />
            <input
              className="form-control"
              type="url"
              name="website"
              placeholder="Website..."
              onChange={handleChange}
              value={form.website}
            />
            <input
              className="form-control"
              type="text"
              name="company"
              placeholder="Company..."
              onChange={handleChange}
              value={form.company}
              required
            />
          </div>
          <input
            className="btn btn-success"
            type="submit"
            value="Send"
            onClick={handleSubmit}
          />
          <input
            className="btn btn-danger"
            type="reset"
            value="Reset"
            onClick={handleReset}
          />
        </form>
      </div>
    </>
  );
};

export default CrudForm;
