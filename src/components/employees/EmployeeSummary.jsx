import { useEmployees } from "../../context/EmployeeContext";

const EmployeeSummary = () => {
  const { employees } = useEmployees();

  const active = employees.filter((e) => e.active).length;
  const inactive = employees.length - active;

  return (
    <div className="summary">
      <p>Total Employees: {employees.length}</p>
      <p>Active: {active}</p>
      <p>Inactive: {inactive}</p>
    </div>
  );
};

export default EmployeeSummary;
