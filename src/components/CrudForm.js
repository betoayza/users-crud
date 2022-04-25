import React from "react";
import React, { useState, useEffect } from 'react';

const form={
    name:
};

const CrudForm = () => {
  const [form, setform] = useState({});
  const handleChange=e=>{

  }; 

  const handleSubmit=e=>{
      e.preventDefault();
  };

  const handleReset=e=>{};
    
  return (
    <>
      <div>Add</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name..." onChange={handleChange} value={form.name}/>
        <input type="text" name="name" placeholder="Name..." />
        <input type="email" name="name" placeholder="Name..." />

        <input type="submit" value="send"/>
        <input type="reset" value="reset"/>
      </form>
    </>
  );
};

export default CrudForm;
