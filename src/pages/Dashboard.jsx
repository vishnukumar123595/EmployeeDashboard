import EmployeeSummary from "../components/employees/EmployeeSummary";
import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeTable from "../components/employees/EmployeeTable";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Employee Management Dashboard</h1>
      <EmployeeSummary />
      <EmployeeForm />
      <EmployeeTable />
    </div>
  );
};

export default Dashboard;
