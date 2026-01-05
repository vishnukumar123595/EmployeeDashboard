
import { useEffect, useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import { STATES } from "../../utils/constants";
import ImagePreviewModal from "../common/ImagePreviewModal";

const emptyForm = {
  name: "",
  gender: "",
  dob: "",
  state: "",
  active: true,
  image: "",
};

const EmployeeForm = () => {
  const {
    addEmployee,
    updateEmployee,
    selectedEmployee,
  } = useEmployees();

  const [form, setForm] = useState(selectedEmployee || emptyForm);
  const [tempImage, setTempImage] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
  if (selectedEmployee) {
    setForm(selectedEmployee);
  } else {
    setForm(emptyForm);
  }
}, [selectedEmployee]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImage(reader.result);
      setShowImageModal(true);
    };
    reader.readAsDataURL(file);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("Please fill required fields");
      return;
    }

    selectedEmployee ? updateEmployee(form) : addEmployee(form);
    setForm(emptyForm);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <select
        value={form.gender}
        onChange={(e) =>
          setForm({ ...form, gender: e.target.value })
        }
      >
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        type="date"
        value={form.dob}
        onChange={(e) =>
          setForm({ ...form, dob: e.target.value })
        }
      />

      <select
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      >
        <option value="">Select State</option>
        {STATES.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>


      <select
        value={form.active}
        onChange={(e) =>
          setForm({ ...form, active: e.target.value === "true" })
        }
      >
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      {showImageModal && (
        <ImagePreviewModal
          image={tempImage}
          onConfirm={() => {
            setForm(prev => ({ ...prev, image: tempImage }));
            setShowImageModal(false);
            setTempImage("");
          }}
          onCancel={() => {
            setShowImageModal(false);
            setTempImage("");
          }}
        />
      )}
      {/* {form.image && <img src={form.image} alt="Preview" style={{ width: '60px', borderRadius: '5%' }} />} */}

      <button
        type="submit"
        disabled={!form.name || !form.gender || !form.dob || !form.state}
        className={`btn ${selectedEmployee ? "btn-success" : "btn-primary"
          }`}
      >
        {selectedEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
