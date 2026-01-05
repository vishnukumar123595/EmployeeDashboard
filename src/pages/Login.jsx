import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validateLogin } from "../utils/validators";
const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      login(form.username, form.password);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({...form, username: e.target.value})}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <div className="loginbutton">
           <button type="submit">Login</button>
           </div>
       
      </form>
    </div>
  );
};

export default Login;
