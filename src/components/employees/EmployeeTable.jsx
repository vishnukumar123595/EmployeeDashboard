
import { useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeFilters from "./EmployeeFilters";
import Modal from "../common/Modal";
import useDebounce from "../../hooks/useDebounce";
const EmployeeTable = () => {
  const {
    employees,
    deleteEmployee,
    toggleStatus,
    setSelectedEmployee,
  } = useEmployees();

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const debouncedSearch = useDebounce(search);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const filtered = employees.filter((e) => {
    return (
      e.name.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      (!gender || e.gender === gender) &&
      (!status ||
        (status === "active" ? e.active : !e.active))
    );
  });


  const handlePrint = () => {
    window.print();
  };

  if (!employees.length)
    return <p className="empty">No employees added.</p>;

  return (
    <>
      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />
    
      <button className="btn btn-edit" style={{margin:'10px'}} onClick={handlePrint}>Print Employees</button>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>
                {e.image && <img src={e.image} width="40" />}
              </td>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.dob}</td>
              <td>{e.state}</td>
              <td>
                <button
                  className={`btn ${e.active ? "btn-active" : "btn-inactive"
                    }`}
                  onClick={() => toggleStatus(e.id)}
                >
                  {e.active ? "Active" : "Inactive"}
                </button>

              </td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => setSelectedEmployee(e)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-delete"
                  onClick={() => {
                    setDeleteId(e.id);
                    setShowModal(true);
                  }}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={showModal}
        title="Confirm Deletion"
        message="Are you sure you want to delete this employee?"
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          deleteEmployee(deleteId);
          setShowModal(false);
        }}
      />
    </>
  );
};

export default EmployeeTable;
