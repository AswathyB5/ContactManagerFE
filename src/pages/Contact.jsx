import React, { useEffect, useState } from "react";
import { deleteData, editData, getData } from "../services/AllApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";




const Contact = () => {
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getContact = async () => {
    let apiResponse = await getData();
    setdata(apiResponse.data);
  };

  useEffect(() => {
    getContact();
  }, []);

  const deleteContact = async (id) => {
    await deleteData(id);
    alert("Contact deleted Successfully!!");
    getContact();
  };

  const onEditClick = (contactDet) => {
    setedit(contactDet);
  };

  const EditContact = async () => {
    let reqBody = {
      name: edit.name,
      email: edit.email,
      phno: edit.phno,
    };
    await editData(reqBody);
    handleClose();
    getContact();
  };

  return (
    <div>
      <h1 className="text-center mt-4">
        {" "}
        <a
          className="text-light me-5  p-3 btn btn-outline-dark"
          style={{ borderRadius: "10px" ,backgroundColor:"#610000"}}
        >
          Contact Manager Application
        </a>
      </h1>

      <h2 className="text-white mb-3">Contacts List</h2>
      <table className="table table-danger table-hover text-white container">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE NO</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachdata) => (
            <tr key={eachdata.id}>
              <td>
                <FaUserCircle /> {eachdata.id}
              </td>
              <td>{eachdata.name}</td>
              <td>{eachdata.email}</td>
              <td>{eachdata.phno}</td>
              <td>
                <Button
                  style={{ backgroundColor: "#610000", borderColor: "#610000" }}
                  size="sm"
                  className="me-2"
                  onClick={() => {
                    handleShow();
                    onEditClick(eachdata);
                  }}
                >
                  <FaUserEdit />
                </Button>

                <Button
                  style={{ backgroundColor: "#610000", borderColor: "#610000" }}
                  size="sm"
                  onClick={() => deleteContact(eachdata.id)}
                >
                  <RiDeleteBin5Fill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={(e) => setedit({ ...edit, name: e.target.value })}
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            value={edit.name}
          />
          <input
            type="text"
            onChange={(e) => setedit({ ...edit, email: e.target.value })}
            className="form-control mb-2"
            placeholder="Email"
            value={edit.email}
          />
          <input
            type="text"
            onChange={(e) => setedit({ ...edit, phno: e.target.value })}
            className="form-control"
            placeholder="Phone no"
            value={edit.phno}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#610000" }} onClick={EditContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
