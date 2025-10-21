import React, { useState } from 'react'
import { createData } from '../services/AllApi';

const AddContact = () => {

  const [inputVal, setinputVal] = useState({name:"",email:"",phno:""})

  

  const createContact=async()=>{

    let apiResponse=await createData(inputVal)
    console.log(apiResponse)
    alert("New user created")
  }

  return (
    <div className="container mt-5 text-center" style={{marginLeft:"400px"}}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <input
            onChange={(e) => setinputVal({ ...inputVal, name: e.target.value })}
            type="text"
            placeholder="name"
            className="form-control"
          />
          <br />

          <input
            onChange={(e) => setinputVal({ ...inputVal, email: e.target.value })}
            type="text"
            placeholder="email"
            className="form-control"
          />
          <br />

          <input
            onChange={(e) => setinputVal({ ...inputVal, phno: e.target.value })}
            type="text"
            placeholder="phno"
            className="form-control"
          />
          <br />
          <button style={{backgroundColor:"#610000",color:"white",borderRadius:"10px"}} onClick={createContact}>
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContact